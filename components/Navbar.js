import NavbarData from "../data/Navbar";

const Navbar = props => {
  return (
    <div className="navbar-container">
      <div className="redirectLinkContainer">
        {NavbarData.map((navigationLink, index) => {
          const { redirect, text } = navigationLink;

          return (
            <a href={redirect} key={index} id={index}>
              {text}
            </a>
          );
        })}
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
