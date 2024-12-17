import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';
import placeholderImage from '../event.jpg'; // Add your image here

const EventDetails = () => {
  const { id } = useParams(); // Get the event ID from the route parameter
  const [event, setEvent] = useState(null); // State to store event data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    // Fetch event data from the backend API
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/events/${id}`); // EventDetails.js
        if (!response.ok) throw new Error('Failed to fetch event details');
        
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="event-details-container">
        <h1>Event Details</h1>
      {event && (
        <>
          {/* Title */}
          <h1 className="event-title">{event.Title}</h1>
          
          {/* Event Card */}
          <div className="event-card">
            <img src={placeholderImage} alt={event.Title} className="event-image" />
            <div className="event-info">
              <h2>Description</h2>
              <p>{event.Description}</p>
              <h3>Date</h3>
              <p>{new Date(event.Date).toDateString()}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EventDetails;
