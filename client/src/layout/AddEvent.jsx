import React from "react";
import EventForm from "../components/EventForm";
import Navbar from "./NavBar";
import { Typography } from "antd";


function AddEvent({addCreatedEvent}) {

    return (
        // <h1>Contact page!</h1>
        <div>
            <Navbar />
            <div className="HostEventTitle">
                <Typography.Text
                style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                >Host Your Event With Us</Typography.Text>
            </div>
            <EventForm addCreatedEvent={addCreatedEvent}/>
        </div>
    )
}

export default AddEvent