import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";


function App() {
  return (
    <BrowserRouter>

    <NavBar />
      <main>
          <Switch>
          
          </Switch>
      </main>
  </BrowserRouter>
  );
}

export default App;
