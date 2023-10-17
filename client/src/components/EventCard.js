import React from "react";

function EventCard({event}) {
    return (
        <div>
            <h3>Events:</h3>
            <h4>Event Name: {event.name}</h4>
            <h4>Description: {event.description}</h4>
            <h4>Set Date: {event.event_date} Set Time: {event.time}:00</h4>

        </div>
    )
}

export default EventCard