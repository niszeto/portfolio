import Banner from "./Banner";
import Card from "./Card";
import ExperienceData from "../data/Experience";

const Experience = props => {
  return (
    <div id="experience" className="experience-container">
      <Banner text="Experience" />
      {ExperienceData.map((experience, index) => {
        return <Card data={experience} key={index} id={index} />;
      })}
      <style jsx>{`
        .experience-container {
          display: flex;
          flex-direction: column;
          height: 700px;
        }

        @media only screen and (max-width: 600px) {
          .experience-container {
            height: 1200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
