import React, { useEffect, useState } from "react";
import EventsList from "../components/EventsList";
import FullEventCard from "../components/FullEventCard";
import RestfulImage from "../layout/RestfulImage.jpg";

function Home({ events, selectEvent, currentEvent }) {
  console.log(currentEvent);
  return (
    <div>
      <h1>Welcome to the Restful!</h1>
      <EventsList events={events} selectEvent={selectEvent} />
      <div style={{ justifyContent: "center", maxWidth: "80%" }}>
        <h4>About Us</h4>
        <img
          src={RestfulImage}
          alt="a pic of our venue"
          style={{
            height: "200px",
            width: "200px",
          }}
        />
        <p>
          Welcome to the Restful! Founded in 1980 by a collective of backend
          engineers, this versatile venue has it all- a main stage, private
          booths, VIP area, and a full-service kitchen! Easily accessible on all
          major routes and ADA compatible so everyone can have a good time. Come
          to one of our events, or host your own with us!
        </p>
      </div>
    </div>
  );
}

export default Home;
