import Banner from "./Banner";
import CaptionPicture from "./CaptionPicture";
import SkillData from "../data/Skill";
import SkillsList from "./SkillsList";

const Skills = props => {
  return (
    <div className="skills-container">
      <Banner text="Skills" />
      <SkillsList data={SkillData} />
      <style jsx>{``}</style>
    </div>
  );
};

export default Skills;
