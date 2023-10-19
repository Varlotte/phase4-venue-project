import React, { useEffect, useState } from "react";

//CHANGED Switch to Routes - Sergio 10/17
//changed it back to switch because routes is legacy code and it wasn't running- charlotte 10/17
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../layout/NavBar";
import Home from "../layout/Home";
import Contact from "../layout/Contact";
import Signup from "../layout/Signup";
import Login from "../layout/Login";
import AcctDash from "../layout/AcctDash";
import FullEventCard from "./FullEventCard";

function App() {
  
  const [eventsList, setEventsList] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({id: "", name: "", price: "", description: "", event_date: "", time: "", location: "", reservations: " "})

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((events) => {
        setEventsList(events);
      });
  }, []);

  function selectEvent(eventID) {
    console.log(eventID)
    fetch(`http://127.0.0.1:5555/events/${eventID}`)
    .then(r => r.json())
    .then(event => {
      setCurrentEvent(event);
    })
  }



  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/selectedEvent">
            <FullEventCard selectedEvent={currentEvent}/>
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/contact-page">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/acctdash">
            <AcctDash />
          </Route>
          <Route path="/">
            <Home events={eventsList} selectEvent={selectEvent} currentEvent={currentEvent}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
