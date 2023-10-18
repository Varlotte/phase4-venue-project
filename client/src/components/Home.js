import React, { useEffect, useState } from "react";
import EventsList from "./EventsList";

function Home() {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/events")
      .then((r) => r.json())
      .then((events) => {
        setEventsList(events);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to the Restful!</h1>
      <EventsList events={eventsList} />
    </div>
  );
}

export default Home;
