import CaptionPicture from "./CaptionPicture";

const SkillsList = props => {
  const { data } = props;
  return (
    <div className="skills-list-container">
      {data.map((skill, index) => {
        const { imageURL, technology } = skill;
        return (
          <CaptionPicture
            imageURL={imageURL}
            caption={technology}
            key={index}
            id={index}
          />
        );
      })}
      <style jsx>{`
        .skills-list-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default SkillsList;
