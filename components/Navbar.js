import React from "react";

const Navbar = () => {
  return (
    <div className="sideBarContainer">
      <div className="avatarContainer">
        <b>Nicholas Szeto</b>
      </div>
      <div className="redirectLinkContainer">
        <a>About</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Experience</a>
        <a>Education</a>
        <a>Contact</a>
        <a>Resume</a>
      </div>

      <div className="iconLinkContainer">
        <button>Email</button>
        <button>Github</button>
        <button>LinkedIn</button>
      </div>
      <style jsx>
        {`
          .sideBarContainer {
            width: 25%;
            background-color: #f1f1f1;
            position: fixed;
            height: 100%;
            overflow: auto;
            display: flex;
            flex-direction: column;
            justify-content: spaced-evenly;
          }

          .avatarContainer {
            width: 200px;
            height: 30%;
          }

          .redirectLinkContainer {
            display: flex;
            flex-direction: column;
            background: red;
          }

          .iconLinkContainer {
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
