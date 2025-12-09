import { useState, useEffect, useRef } from 'react'
import api from '../services/api'
import './IntroVideoModal.css'

function IntroVideoModal() {
  const [show, setShow] = useState(false)
  const [videoData, setVideoData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const fetchIntroVideo = async () => {
      try {
        const data = await api.getIntroVideo()
        if (data && data.enabled && data.video_url) {
          // Check if user has already seen the video this session
          const hasSeenVideo = sessionStorage.getItem('gvc_intro_seen')
          if (!hasSeenVideo) {
            setVideoData(data)
            setShow(true)
          }
        }
      } catch (error) {
        console.error('Error fetching intro video:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchIntroVideo()
  }, [])

  const handleClose = () => {
    sessionStorage.setItem('gvc_intro_seen', 'true')
    setShow(false)
  }

  const handleSkip = () => {
    handleClose()
  }

  const handleVideoEnd = () => {
    handleClose()
  }

  const handleUnmute = () => {
    setIsMuted(false)
    if (videoRef.current) {
      videoRef.current.muted = false
    }
  }

  const handleMute = () => {
    setIsMuted(true)
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }

  // Check if URL is a direct video file
  const isDirectVideo = (url) => {
    if (!url || typeof url !== 'string') return false
    return url.match(/\.(mp4|webm|ogg)($|\?)/i) || 
           url.includes('s3.amazonaws.com') || 
           url.includes('.s3.') ||
           (!url.includes('youtube') && !url.includes('vimeo'))
  }

  // Convert YouTube/Vimeo URLs to embed URLs
  const getEmbedUrl = (url) => {
    if (!url || typeof url !== 'string') return null
    
    // YouTube
    const youtubeMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&mute=1&rel=0&enablejsapi=1`
    }
    
    // Vimeo
    const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/)
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&muted=1`
    }
    
    return url
  }

  if (loading || !show || !videoData) return null

  const videoUrl = videoData.video_url
  const isDirect = isDirectVideo(videoUrl)
  const embedUrl = getEmbedUrl(videoUrl)

  return (
    <div className="intro-modal-overlay" onClick={handleClose}>
      <div className="intro-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="intro-modal-header">
          <span className="intro-modal-title">Welcome to GVC</span>
          {videoData.show_skip !== false && (
            <button className="intro-skip-btn" onClick={handleSkip}>
              Skip →
            </button>
          )}
        </div>
        
        <div className="intro-video-wrapper">
          {isDirect ? (
            <>
              <video 
                ref={videoRef}
                autoPlay
                muted={isMuted}
                playsInline
                className="intro-video-player"
                onEnded={handleVideoEnd}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Unmute/Mute Button */}
              <button 
                className={`intro-sound-btn ${isMuted ? 'muted' : 'unmuted'}`}
                onClick={isMuted ? handleUnmute : handleMute}
              >
                {isMuted ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                      <line x1="23" y1="9" x2="17" y2="15"/>
                      <line x1="17" y1="9" x2="23" y2="15"/>
                    </svg>
                    <span>Tap to Unmute</span>
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                    </svg>
                    <span>Sound On</span>
                  </>
                )}
              </button>
            </>
          ) : (
            <>
              <iframe
                src={embedUrl}
                title="GVC Introduction"
                className="intro-video-iframe"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Note for embedded videos */}
              <div className="intro-embed-note">
                Click the video to unmute
              </div>
            </>
          )}
        </div>

        <button className="intro-close-btn" onClick={handleClose}>
          Continue to Site
        </button>
      </div>
    </div>
  )
}

export default IntroVideoModal
