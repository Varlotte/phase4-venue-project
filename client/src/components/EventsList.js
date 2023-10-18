import React from "react";
import EventCard from "./EventCard";

function EventsList({events, selectEvent}) {
  
    const eventsCards = events.map((event) => <EventCard key = {event.id} event = {event} selectEvent={selectEvent}/>)


    return (
        <div id="Cards">
            {eventsCards}
        </div>
    )
}

export default EventsList