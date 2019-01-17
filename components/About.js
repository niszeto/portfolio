import Banner from "./Banner";
import AboutData from "../data/About";
import ParagraphsList from "./ParagraphsList";

const About = props => {
  const { summary, paragraphs } = AboutData;

  return (
    <article id="about" className="about-container">
      <Banner text="About" />
      <section className="about-content box-shadow margin-twenty padding-ten">
        <h1 className="font font-size header-font margin-ten">{summary}</h1>
        <ParagraphsList data={paragraphs} />
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
          width: 80%;
          background-color: #f7f9fb;
        }
      `}</style>
    </article>
  );
};

export default About;
