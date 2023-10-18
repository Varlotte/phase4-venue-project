import React, { useEffect, useState } from "react";

//CHANGED Switch to Routes - Sergio 10/17
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EventsList from "./EventsList";
import Navbar from "./NavBar";

function App() {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/events")
      .then((r) => r.json())
      .then((events) => {
        setEventsList(events);
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/">
            <h1>Welcome to the Restful!</h1>
            <EventsList events={eventsList} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
