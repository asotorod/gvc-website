import { useState, useEffect } from 'react'
import api from '../services/api'
import './Green.css'

// Helper to extract content from CMS response
const getContent = (data) => {
  if (!data) return null;
  if (typeof data === 'string') return data;
  if (typeof data === 'object' && data.content) return data.content;
  return null;
};

// Check if URL is a direct video file (S3 or direct MP4/WebM)
const isDirectVideo = (url) => {
  if (!url || typeof url !== 'string') return false;
  return url.match(/\.(mp4|webm|ogg)($|\?)/i) || 
         url.includes('s3.amazonaws.com') || 
         url.includes('.s3.') ||
         (!url.includes('youtube') && !url.includes('vimeo'));
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
        console.log('Green page content:', content); // Debug log
        if (content) {
          setPageContent(content);
        }
      } catch (error) {
        console.error('Error fetching green page data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Extract content values using helper
  const videoUrl = getContent(pageContent.video_url);
  const videoTitle = getContent(pageContent.video_title) || 'See Our Green Initiative in Action';
  const pageTitle = getContent(pageContent.page_title) || 'Green Initiative';
  const introText = getContent(pageContent.intro_text) || 'Our commitment to a sustainable future';
  const initiative1Title = getContent(pageContent.initiative_1_title) || 'Electric Buses';
  const initiative1Text = getContent(pageContent.initiative_1_text) || "We're adding electric buses to our fleet, producing zero direct emissions.";
  const initiative2Title = getContent(pageContent.initiative_2_title) || 'Propane Buses';
  const initiative2Text = getContent(pageContent.initiative_2_text) || 'Our propane-powered buses produce significantly fewer emissions than diesel.';
  const initiative3Title = getContent(pageContent.initiative_3_title) || 'Eco-Friendly Practices';
  const initiative3Text = getContent(pageContent.initiative_3_text) || 'From efficient routing to recycling programs at our facilities.';

  const isDirect = isDirectVideo(videoUrl);

  return (
    <div className="green-page">
      <section 
        className="page-hero green-hero" 
        style={heroImage ? { backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>🌿 {pageTitle}</h1>
          <p>{introText}</p>
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
      {videoUrl && (
        <section className="section video-section">
          <div className="container">
            <div className="video-container">
              <h2 className="video-title">{videoTitle}</h2>
              <div className="video-wrapper">
                {isDirect ? (
                  <video 
                    controls 
                    className="video-player"
                    playsInline
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    src={videoUrl}
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
              <h3>{initiative1Title}</h3>
              <p>{initiative1Text}</p>
            </div>
            <div className="green-card">
              <div className="green-icon">🌱</div>
              <h3>{initiative2Title}</h3>
              <p>{initiative2Text}</p>
            </div>
            <div className="green-card">
              <div className="green-icon">♻️</div>
              <h3>{initiative3Title}</h3>
              <p>{initiative3Text}</p>
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
