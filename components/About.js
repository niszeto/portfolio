import Banner from "./Banner";
import AboutData from "../data/About";

const summary = "Determined individual for self and peer improvement";

const About = props => {
  return (
    <article id="about" className="about-container">
      <Banner text="About" />
      <section className="about-content box-shadow">
        <h1 className="font font-size header-font">{summary}</h1>
        <p className="font font-size font-color">{AboutData}</p>
      </section>
      <style jsx>{`
        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .about-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          width: 85%;
          margin: 20px;
          padding: 10px;
          background-color: #f7f9fb;
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
