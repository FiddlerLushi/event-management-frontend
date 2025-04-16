import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  // Navigate to event details page when the card is clicked
  const handleClick = () => {
    navigate(`/events/${event._id}`);
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
      <p>Price: {event.price > 0 ? `$${event.price}` : 'Free'}</p>
    </div>
  );
};

export default EventCard;
