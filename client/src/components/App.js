import React, { useEffect, useState } from "react";

//CHANGED Switch to Routes - Sergio 10/17
import { Routes, Route } from "react-router-dom";
import EventsList from "./EventsList";

function App() {
  const [eventsList, setEventsList] = useState([]);

  // since we have proxy in our package.json can we just do fetch("/events")?
  //"http://127.0.0.1:5555/events" Commented out so we can put it back if it doesn't work
  //nvm it did not like that and I had to change it back (c, 10/17)

  useEffect(() => {
    fetch("http://127.0.0.1:5555/events")
      .then((r) => r.json())
      .then((events) => {
        setEventsList(events);
      });
  }, []);

  console.log(eventsList);

  const yo = ["hi"];

  return (
    <div>
      <h1>Venue Project</h1>
      <EventsList events={eventsList} selectEvent={selectEvent}/>
    </div>
  );
}

export default App;
