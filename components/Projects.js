import Banner from "./Banner";
import ProjectCard from "./ProjectCard";
import ProjectsData from "../data/Project";

const Project = props => {
  return (
    <div id="projects" className="projects-container">
      <Banner text="Projects" />
      <div className="projects-cards-container">
        {ProjectsData.map((project, index) => {
          return <ProjectCard data={project} key={index} id={index} />;
        })}
      </div>
      <style jsx>{`
        .projects-container {
          display: flex;
          flex-direction: column;
          // justify-content: center;
          align-items: center;
        }
        .projects-cards-container {
          display: flex;
          flex-direction: column;
          // justify-content: center;
          align-items: center;
          // background-color: red;
          // height: auto;
          width: 80%;
        }
      `}</style>
    </div>
  );
};

export default Project;
