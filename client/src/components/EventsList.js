import React from "react";
import EventCard from "./EventCard";

function EventsList({events}) {
  
    const eventsCards = events.map((event) => <EventCard key = {event.id} event = {event}/>)


    return (
        <div>
            {eventsCards}
        </div>
    )
}

export default EventsList