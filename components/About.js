import Banner from "./Banner";
import AboutData from "../data/About";

const summary = "Determined individual for self and peer improvement";

const About = props => {
  return (
    <article id="about" className="about-container">
      <Banner text="About" />
      <section className="about-content">
        <h1 className="font font-size header-font">{summary}</h1>
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

        h1 {
          margin: 10px;
        }

        p {
          margin: 10px;
        }
      `}</style>
    </article>
  );
};

export default About;
