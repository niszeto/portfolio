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
      <style jsx>{``}</style>
    </div>
  );
};

export default Experience;
