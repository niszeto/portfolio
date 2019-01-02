import Banner from "./Banner";
import ExperienceCard from "./ExperienceCard";
import ExperienceData from "../data/Experience";

const Experience = props => {
  return (
    <div>
      <Banner text="Experience" />
      <ExperienceCard data={ExperienceData} />
    </div>
  );
};

export default Experience;
