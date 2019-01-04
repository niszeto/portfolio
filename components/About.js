import Banner from "./Banner";
import AboutData from "../data/About";

const About = props => {
  return (
    <div id="about">
      <Banner text="About" />
      <p>{AboutData}</p>
      <style jsx>{`
        p {
          margin: auto;
          width: 95%;
        }
      `}</style>
    </div>
  );
};

export default About;
