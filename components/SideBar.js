import Avatar from "./Avatar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SideBar = props => {
  return (
    <div className="side-bar-container box-shadow">
      <Avatar />
      <Navbar />
      <Footer />
      <style jsx>{`
        .side-bar-container {
          display: flex;
          flex-direction: column;
          justify-content: spaced-evenly;
          width: 26%;
          // background-color: #f7f9fb;
          background-color: #8fc1e3;
          position: fixed;
          height: 100%;
          overflow: auto;
        }

        @media only screen and (max-width: 600px) {
          .side-bar-container {
            position: static;
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: spaced-evenly;
            width: 100%;
            height: 100%;
            overflow: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default SideBar;
