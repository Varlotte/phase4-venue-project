import React, { useEffect, useState, createContext } from "react";

//CHANGED Switch to Routes - Sergio 10/17
//changed it back to switch because routes is legacy code and it wasn't running- charlotte 10/17
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import HomePage from "../layout/HomePage";
import Home from "../layout/Home";
import AddEvent from "../layout/AddEvent";
import Signup from "../layout/Signup";
import Login from "../layout/Login";
import AcctDash from "../layout/AcctDash";
import FullEventCard from "./FullEventCard";
import { CurrentUserContext } from "../Helperfuncs";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [eventsList, setEventsList] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    event_date: "",
    time: "",
    location: "",
    reservations: " ",
  });

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((events) => {
        setEventsList(events);
      });
  }, []);

  function selectEvent(eventID) {
    console.log(eventID);
    fetch(`http://127.0.0.1:5555/events/${eventID}`)
      .then((r) => r.json())
      .then((event) => {
        setCurrentEvent(event);
        console.log("hi");
      });
  }

  return (
    <div>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <BrowserRouter>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/selectedEvent">
              <FullEventCard selectedEvent={currentEvent} />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/add-event">
              <AddEvent />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/acctdash">
              <AcctDash />
            </Route>
            <Route path="/home">
              <HomePage events={eventsList}
                selectEvent={selectEvent}
                currentEvent={currentEvent}/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
