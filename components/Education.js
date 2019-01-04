import Banner from "./Banner";
import EducationData from "../data/Education";
import Card from "./Card";

const Education = props => {
  return (
    <div id="education">
      <Banner text="Education" />
      {EducationData.map((education, index) => {
        return <Card data={education} key={index} id={index} />;
      })}
      <style jsx>{`
        .education-content {
          border-style: solid;
          width: 80%;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default Education;
