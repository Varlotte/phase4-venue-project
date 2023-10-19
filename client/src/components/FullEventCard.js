import React, { useEffect, useState } from "react";
import { Avatar, Card } from 'antd';
import ReservationForm from "./ReservationForm";

function FullEventCard({selectedEvent}) {
    console.log(selectedEvent)
    return (
        <div class = "Card"> 
            <Card
                style={{}}
                cover={
                    <img
                        alt="example"
                        src={selectedEvent.image}
                        style={{ "object-fit": "cover", height: "500px", width: "1000px" }}
                    />
                }
            >
                <div>
                    {/* <img src={selectedEvent.image}/> */}
                    <h4>{selectedEvent.name}</h4>
                    <h4>{selectedEvent.description}</h4>
                    <h4>{selectedEvent.event_date}</h4>
                    <h4>{selectedEvent.location}</h4>
                    <h4>${selectedEvent.price + ".00 Fee"}</h4>
                    <h4>
                        {selectedEvent.time > 12? <h1>{(selectedEvent.time -12) + ":00pm"}</h1>: <h4>{selectedEvent.time + ":00 am"}</h4>}
                    </h4>
                </div>
            </Card>
            <ReservationForm eventId={selectedEvent.id}/>
        </div>
    )
}

export default FullEventCard