import Banner from "./Banner";
import Card from "./Card";
import ExperienceData from "../data/Experience";

const Experience = props => {
  return (
    <div id="experience" className="experience-container">
      <Banner text="Experience" />
      <div className="experience-content">
        {ExperienceData.map((experience, index) => {
          return <Card data={experience} key={index} id={index} />;
        })}
      </div>
      <style jsx>{`
        .experience-container {
          display: flex;
          flex-direction: column;
        }

        .experience-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 80%;
          margin: auto;
        }

        @media only screen and (max-width: 600px) {
          .experience-container {
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
