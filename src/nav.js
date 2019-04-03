import React from "react";
class Nav extends React.Component {
  state = {
    navs: ["home", "about", "projects", "contact"]
  };
  render() {
    return (
      <div id="navbar">
        <a
          className="link"
          href="https://www.marsmorse.com/Documents/Resume.pdf"
        >
          Resume
        </a>
      </div>
    );
  }
}

export default Nav;
