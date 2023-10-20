import React from "react";
import Navbar from "./NavBar";
import EventsList from "../components/EventsList";


function HomePage({ events, selectEvent, currentEvent }) {
    console.log(currentEvent)

    return (
        <div>
            <Navbar />
            <EventsList events={events} selectEvent={selectEvent} />
        </div>
    )
}

export default HomePage