// src/components/Events.js

import React from "react";
import { EventData } from '../Eventdata'

const Events = ({ ref }) => {
  return (
    <div ref={ref} className="events-container">
      {EventData.map((event, index) => (
        <div key={index} className="event-section">
          <h1 className="event-heading">{event.eventName}</h1>
          <div className="event-images">
            {event.images.map((img, idx) => (
              <div key={idx} className="event-image-card">
                <img
                  src={img}
                  alt={`Event ${index + 1} Image ${idx + 1}`}
                  className="event-img"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
