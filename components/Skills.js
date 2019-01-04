import Banner from "./Banner";
import CaptionPicture from "./CaptionPicture";

const Skills = props => {
  return (
    <div className="skills-container">
      <Banner text="Skills" />
      <CaptionPicture
        imageURL={
          "https://user-images.githubusercontent.com/14293805/36941746-0d65c6fa-1f63-11e8-8afa-ab2d28de86db.png"
        }
        caption={"JavaScript"}
      />
      <style jsx>{``}</style>
    </div>
  );
};

export default Skills;
