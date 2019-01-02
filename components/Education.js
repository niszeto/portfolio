import Banner from "./Banner";
import Header from "./Header";
import EducationData from "../data/Education";
import DescriptionsList from "./DescriptionsList";

const Education = props => {
  const {
    logo,
    name,
    city,
    state,
    startDate,
    endDate,
    educationDetails
  } = EducationData;

  return (
    <div>
      <Banner text="Education" />
      <div className="education-content">
        <Header
          imageURI={logo}
          title={name}
          text={`${startDate} - ${endDate} | ${city},${state} `}
        />
        <div>
          <DescriptionsList descriptions={educationDetails} />
        </div>
      </div>
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
