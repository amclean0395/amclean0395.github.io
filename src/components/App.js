import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";


function App() {
  return (
    <BrowserRouter>

    <NavBar />
      <main>
          <Switch>

            <Route path="/">
              <Home />
            </Route> 

          </Switch>
      </main>
  </BrowserRouter>
  );
}

export default App;
