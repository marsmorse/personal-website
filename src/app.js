import React from "react";
import Home from "./home.js";
import About from "./about";
import Timeline from "./timeline";
class App extends React.Component {
  render() {
    return (
      <div id="page">
        <Home />
        <About />
        <Timeline />
      </div>
    );
  }
}
export default App;
