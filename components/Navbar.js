import React from "react";

const Navbar = props => {
  return (
    <div className="navbar-container">
      <div className="redirectLinkContainer">
        <a href="/#about">About</a>
        <a href="/#skills">Skills</a>
        <a href="/#projects">Projects</a>
        <a href="/#experience">Experience</a>
        <a href="/#education">Education</a>
        <a href="/#contact">Contact</a>
        <a href="/static/Nicholas Szeto Resume.pdf" target="_blank">
          Resume
        </a>
      </div>

      <style jsx>
        {`
          .navbar-container {
            flex: 1;
            background-color: white;
          }
          .redirectLinkContainer {
            display: flex;
            flex-direction: column;
          }

          .redirectLinkContainer a {
            display: block;
            color: black;
            padding: 10px;
          }

          .redirectLinkContainer a.active {
            background-color: #4caf50;
            color: white;
          }

          .redirectLinkContainer a:hover:not(.active) {
            background-color: #555;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
