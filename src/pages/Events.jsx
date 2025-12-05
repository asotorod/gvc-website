import { useState, useEffect } from 'react'
import api from '../services/api'
import './Events.css'

function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadEvents() }, [])

  const loadEvents = async () => {
    try {
      const data = await api.getEvents({ upcoming: true })
      setEvents(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error loading events:', error)
      setEvents([])
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="events-page">
      <section className="page-hero"><div className="container"><h1>Events</h1><p>Stay updated on GVC community events</p></div></section>
      <section className="section"><div className="container">
        {loading ? (<div className="events-loading"><p>Loading events...</p></div>
        ) : events.length > 0 ? (
          <div className="events-list">{events.map(event => (<div key={event.id} className="event-card"><div className="event-content"><div className="event-date">{formatDate(event.event_date)}</div><h3>{event.title}</h3>{event.location && <p className="event-location">📍 {event.location}</p>}{event.description && <p className="event-description">{event.description}</p>}</div></div>))}</div>
        ) : (
          <div className="events-empty"><span>📅</span><h3>No Upcoming Events</h3><p>Check back soon for upcoming GVC community events!</p></div>
        )}
      </div></section>
    </div>
  )
}
export default Events
