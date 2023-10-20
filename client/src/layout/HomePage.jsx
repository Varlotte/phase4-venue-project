import React from "react";
import Navbar from "./NavBar";
import EventsList from "../components/EventsList";


function HomePage({ events, selectEvent, currentEvent }) {
    console.log(currentEvent)

    return (
        <div>
            <Navbar />
            <div className="navbarImageContainer">
                <img className="navbarImage" src="https://storage.googleapis.com/cms-org.media.aegpresents.com/venue-rentals/share-images/venues/the-novo-venue.jpg" alt="Fun Night Event"/>
            </div>
            <div id="homeLayout">
            <h1>Upcoming Events:</h1>
            <EventsList events={events} selectEvent={selectEvent} />
            </div>
        </div>
    )
}

export default HomePage