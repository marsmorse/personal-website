import React from "react";
import styled from "styled-components";
import About from "./about.js";
const Navbar = styled.div`
  text-align: right;
  color: white;
  //display: inline-block;
  //position: fixed;
  background-color: purple;
`;
const Link = styled.a`
  margin-right: 5%;
  color: white;
  text-decoration: none;
`;
class Nav extends React.Component {
  state = {
    navs: ["home", "about", "projects", "contact"]
  };
  render() {
    return (
      <Navbar className="navBar">
        <nav>
          <Link href="#about">{this.state.navs[0]}</Link>
          <Link>projects</Link>
          <Link className="link">contact</Link>
        </nav>
      </Navbar>
    );
  }
}

export default Nav;
