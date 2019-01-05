import NavbarData from "../data/Navbar";
import Icon from "./Icon";

const Navbar = props => {
  return (
    <div className="navbar-container">
      <div className="redirect-link-container">
        {NavbarData.map((navigationLink, index) => {
          const { redirect, text, iconURI } = navigationLink;

          // might want to create a seperate component called NavbarLink.js
          return (
            <a href={redirect} key={index} id={index}>
              <div className="redirect-link">
                <Icon iconURI={iconURI} />
                <h1 className="font">{text}</h1>
              </div>
            </a>
          );
        })}
      </div>

      <style jsx>
        {`
          .navbar-container {
            // flex: 2;
            background-color: white;
            margin: 10px 0 10px 0;
          }
          .redirect-link-container {
            display: flex;
            flex-direction: column;
          }

          .redirect-link-container a {
            // display: block;
            color: black;
            padding: 5px;
          }

          .redirect-link-container a:hover:not(.active) {
            background-color: #eff0f1;
            color: black;
          }

          .redirect-link {
            display: flex;
            // justify-content: center;
            // align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
