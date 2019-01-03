import Banner from "./Banner";
import ProjectCard from "./ProjectCard";

const Project = props => {
  return (
    <div className="project-container">
      <Banner text="Projects" />
      <div className="project-cards-container">
        <ProjectCard />
      </div>

      <Banner text="Projects" />
      <style jsx>{`
        .project-container {
          display: flex;
          flex-direction: column;
          // justify-content: center;
          align-items: center;
        }
        .project-cards-container {
          display: flex;
          flex-direction: column;
          // justify-content: center;
          align-items: center;
          background-color: red;
          // height: auto;
          width: 80%;
        }
      `}</style>
    </div>
  );
};

export default Project;
