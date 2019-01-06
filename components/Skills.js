import Banner from "./Banner";
import SkillData from "../data/Skill";
import SkillsList from "./SkillsList";

const Skills = props => {
  return (
    <div id="skills" className="skills-container">
      <Banner text="Skills" />
      <div className="skills-content box-shadow">
        <SkillsList data={SkillData} />
      </div>
      <style jsx>{`
        .skills-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .skills-content {
          display: flex;
          margin: 20px;
          width: 80%;
          background-color: #f7f9fb;
        }
      `}</style>
    </div>
  );
};

export default Skills;
