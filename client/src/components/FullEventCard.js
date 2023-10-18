import React, { useEffect, useState } from "react";
import { Avatar, Card } from 'antd';
import ReservationForm from "./ReservationForm";

function FullEventCard({selectedEvent}) {
    console.log(selectedEvent)
    return (
        <div>
            <Card>
                <div>
                    <img src={selectedEvent.image}/>
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
            <ReservationForm />
        </div>
    )
}

export default FullEventCard