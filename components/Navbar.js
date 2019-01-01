import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="redirectLinkContainer">
        <a>About</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Experience</a>
        <a>Education</a>
        <a>Contact</a>
        <a>Resume</a>
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
