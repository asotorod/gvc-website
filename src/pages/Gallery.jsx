import { useState, useEffect } from 'react'
import api from '../services/api'
import './Gallery.css'

function Gallery() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadGallery()
  }, [])

  const loadGallery = async () => {
    try {
      const data = await api.getGallery()
      setItems(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error loading gallery:', error)
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="gallery-page">
      <section className="page-hero"><div className="container"><h1>Gallery</h1><p>See our fleet, team, and community events</p></div></section>
      <section className="section"><div className="container">
        {loading ? (<div className="gallery-loading"><p>Loading gallery...</p></div>
        ) : items.length > 0 ? (
          <div className="gallery-grid">{items.map(item => (<div key={item.id} className="gallery-item"><img src={item.url || item.thumbnail_url} alt={item.title} /><div className="gallery-overlay"><h4>{item.title}</h4></div></div>))}</div>
        ) : (
          <div className="gallery-empty"><span>📷</span><h3>Gallery Coming Soon</h3><p>Check back soon for photos and videos of our fleet, team, and events!</p></div>
        )}
      </div></section>
    </div>
  )
}
export default Gallery
