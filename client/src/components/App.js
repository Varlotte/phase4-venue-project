import React from "react";

//CHANGED Switch to Routes - Sergio 10/17
//changed it back to switch because routes is legacy code and it wasn't running- charlotte 10/17
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "./Home";
import CreateAccount from "./CreateAcct";
import Login from "./Login";
import EventsList from "./EventsList";

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
          <Route path="/acct/new">
            <CreateAccount />
          </Route>
          <Route path="/acct/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <h1>Venue Project</h1>
      <EventsList events={eventsList} selectEvent={selectEvent}/>
    </div>
  );
}

export default App;
