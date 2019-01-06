import Banner from "./Banner";
import EducationData from "../data/Education";
import Card from "./Card";

const Education = props => {
  return (
    <div id="education" className="education-container">
      <Banner text="Education" />
      <div className="education-content">
        {EducationData.map((education, index) => {
          return <Card data={education} key={index} id={index} />;
        })}
      </div>
      <style jsx>{`
        .education-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default Education;
