import React, { useEffect, useState } from "react";
import EventsList from "../components/EventsList";
import FullEventCard from "../components/FullEventCard";
import RestfulImage from "../layout/RestfulImage.jpg";
import { Layout, Space } from 'antd';

function Home({ events, selectEvent, currentEvent }) {
  console.log(currentEvent);
  return (
    <div>
      <div className="navbarImageContainer">
        <img className="navbarImage" src="https://storage.googleapis.com/cms-org.media.aegpresents.com/venue-rentals/share-images/venues/the-novo-venue.jpg" alt="Fun Night Event"/>
      </div>
    <div id="homeLayout">
      <h1>Upcoming Events:</h1>
      <EventsList events={events} selectEvent={selectEvent} />
    </div>
    </div>
  );
}

export default Home;


// https://i.pinimg.com/1200x/74/7f/10/747f1000729a3263510333c60b21df00.jpg