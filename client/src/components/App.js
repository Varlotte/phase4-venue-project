import React from "react";

//CHANGED Switch to Routes - Sergio 10/17
//changed it back to switch because routes is legacy code and it wasn't running- charlotte 10/17
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../layout/NavBar";
import Home from "../layout/Home";
import CreateAccount from "./CreateAcct";
import Login from "./Login";

function App() {

  console.log("PLEASEEEEEEEE")

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
    </div>
  );
}

export default App;
