import React, { useEffect, useState } from "react";
import EventsList from "../components/EventsList";
import FullEventCard from "../components/FullEventCard";

function Home({events, selectEvent, currentEvent}) {

  console.log(currentEvent)
  return (
    <div>
      <h1>Welcome to the Restful!</h1>
      <EventsList events={events} selectEvent={selectEvent}/>
      
    </div>
  );
}

export default Home;