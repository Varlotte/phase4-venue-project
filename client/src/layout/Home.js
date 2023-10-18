import React, { useEffect, useState } from "react";
import EventsList from "../components/EventsList";
import FullEventCard from "../components/FullEventCard";

function Home() {
  const [eventsList, setEventsList] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({id: "", name: "", price: "", description: "", event_date: "", time: "", location: "", reservations: " "})

  useEffect(() => {
    fetch("http://127.0.0.1:5555/events")
      .then((r) => r.json())
      .then((events) => {
        setEventsList(events);
      });
  }, []);

  function selectEvent(eventID) {
    console.log(eventID)
    fetch(`http://127.0.0.1:5555/events/${eventID}`)
    .then(r => r.json())
    .then(event => {setCurrentEvent(event)})
  }

  console.log(currentEvent)
  return (
    <div>
      <h1>Welcome to the Restful!</h1>
      <EventsList events={eventsList} selectEvent={selectEvent} />
      <FullEventCard selectedEvent={currentEvent}/>
    </div>
  );
}

export default Home;