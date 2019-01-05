import Banner from "./Banner";
import AboutData from "../data/About";

const About = props => {
  return (
    <article id="about" className="about-container">
      <Banner text="About" />
      <section className="about-content">
        <h1 className="font font-size">hello</h1>
        <p className="font font-size font-color">{AboutData}</p>
      </section>
      <style jsx>{`
        .about-container {
        }
        .about-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          width: 85%;
          margin: auto;
          padding: 20px;
        }

        // p {
        //   margin: auto;
        //   width: 95%;
        // }
      `}</style>
    </article>
  );
};

export default About;
