import Avatar from "./Avatar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <Avatar />
      <Navbar />
      <Footer />
      <style jsx>{`
        .side-bar-container {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: spaced-evenly;
          width: 26%;
          background-color: #f1f1f1;
          position: fixed;
          height: 100%;
          overflow: auto;
        }
      `}</style>
    </div>
  );
};

export default SideBar;
