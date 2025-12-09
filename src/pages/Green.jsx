import { useState, useEffect } from 'react'
import api from '../services/api'
import './Green.css'

// Helper function to convert YouTube/Vimeo URLs to embed URLs
const getEmbedUrl = (url) => {
  if (!url) return null;
  
  // YouTube
  const youtubeMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }
  
  // Vimeo
  const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }
  
  // Direct URL (MP4)
  return url;
};

// Check if URL is a direct video file
const isDirectVideo = (url) => {
  if (!url) return false;
  return url.match(/\.(mp4|webm|ogg)$/i);
};

function Green() {
  const [heroImage, setHeroImage] = useState(null);
  const [pageContent, setPageContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch hero image
        const hero = await api.getHero('green');
        if (hero && hero.image_url) {
          setHeroImage(hero.image_url);
        }
        
        // Fetch page content (including video)
        const content = await api.getPageContent('green');
        if (content) {
          // Convert array to object keyed by section
          const contentObj = {};
          if (Array.isArray(content)) {
            content.forEach(item => {
              contentObj[item.section] = item.content;
            });
          } else {
            Object.assign(contentObj, content);
          }
          setPageContent(contentObj);
        }
      } catch (error) {
        console.error('Error fetching green page data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const videoUrl = pageContent.video_url;
  const videoTitle = pageContent.video_title || 'See Our Green Initiative in Action';
  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="green-page">
      <section 
        className="page-hero green-hero" 
        style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>🌿 {pageContent.page_title || 'Green Initiative'}</h1>
          <p>{pageContent.intro_text || 'Our commitment to a sustainable future'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="green-intro text-center">
            <h2>Driving Towards a Cleaner Future</h2>
            <p>At GVC, we believe in protecting the environment for future generations. That's why we're actively investing in clean energy solutions and sustainable practices.</p>
          </div>
        </div>
      </section>

      {/* Video Section - Only shows if video_url is set in CMS */}
      {videoUrl && embedUrl && (
        <section className="section video-section">
          <div className="container">
            <div className="video-container">
              <h2 className="video-title">{videoTitle}</h2>
              <div className="video-wrapper">
                {isDirectVideo(videoUrl) ? (
                  <video 
                    controls 
                    className="video-player"
                    poster=""
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    src={embedUrl}
                    title={videoTitle}
                    className="video-iframe"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-3">
            <div className="green-card">
              <div className="green-icon">⚡</div>
              <h3>{pageContent.initiative_1_title || 'Electric Buses'}</h3>
              <p>{pageContent.initiative_1_text || "We're adding electric buses to our fleet, producing zero direct emissions."}</p>
            </div>
            <div className="green-card">
              <div className="green-icon">🌱</div>
              <h3>{pageContent.initiative_2_title || 'Propane Buses'}</h3>
              <p>{pageContent.initiative_2_text || 'Our propane-powered buses produce significantly fewer emissions than diesel.'}</p>
            </div>
            <div className="green-card">
              <div className="green-icon">♻️</div>
              <h3>{pageContent.initiative_3_title || 'Eco-Friendly Practices'}</h3>
              <p>{pageContent.initiative_3_text || 'From efficient routing to recycling programs at our facilities.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Our Environmental Goals</h2>
          <div className="goals-list">
            <div className="goal-item">
              <span className="goal-number">50%</span>
              <span className="goal-text">Clean energy fleet by 2027</span>
            </div>
            <div className="goal-item">
              <span className="goal-number">30%</span>
              <span className="goal-text">Reduction in emissions</span>
            </div>
            <div className="goal-item">
              <span className="goal-number">100%</span>
              <span className="goal-text">Renewable energy at facilities</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Green
