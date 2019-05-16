import React from "react";
import Home from "./home.js";
import About from "./about";
import Projects from "./projects";
import Nav from "./nav";
import Social from "./socials";

class App extends React.Component {
  render() {
    return (
      <div id="page">
        <Social />
        <Home />
        <About />
        <Projects />
      </div>
    );
  }
}
export default App;
