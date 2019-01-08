import Avatar from "./Avatar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SideBar = props => {
  return (
    <div className="side-bar-container box-shadow">
      <div className="side-bar-content">
        <Avatar />
        <Navbar />
        <Footer />
      </div>
      <style jsx>{`
        .side-bar-container {
          width: 26%;
          position: fixed;
          height: 100%;
          overflow: auto;
        }

        .side-bar-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: #8fc1e3;
        }

        @media only screen and (max-width: 600px) {
          .side-bar-container {
            position: static;
            width: 100%;
          }

          // .side-bar-content {
          //   display: flex;
          //   flex-direction: column;
          // }
        }
      `}</style>
    </div>
  );
};

export default SideBar;
