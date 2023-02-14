import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";
import NavBar from "./NavBar";
import Projects from "./Projects";


function App() {
  return (
    <BrowserRouter>

    <NavBar />
      <main>
          <Switch>

            <Route path="/projects">
              <Projects />
            </Route> 

            <Route path="/experience">
              <Experience />
            </Route> 

            <Route path="/education">
              <Education />
            </Route> 

            <Route path="/">
              <Home />
            </Route> 

          </Switch>
      </main>
  </BrowserRouter>
  );
}

export default App;
