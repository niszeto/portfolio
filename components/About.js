import Banner from "./Banner";
import AboutData from "../data/About";

const About = props => {
  return (
    <div id="about" className="about-container">
      <Banner text="About" />
      <p>{AboutData}</p>
      <style jsx>{`
        .about-container {
          height: 400px;
        }
        p {
          margin: auto;
          width: 95%;
        }
      `}</style>
    </div>
  );
};

export default About;
