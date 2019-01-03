import DescriptionsList from "../components/DescriptionsList";

const ProjectCard = props => {
  const { title, image, links, descriptions } = props.data;

  console.log(props.data);

  return (
    <div className="project-card-container">
      <figure>
        <img className="contain" src={image} />
      </figure>

      <header>
        <h1>{title}</h1>
        <button>github</button>
      </header>

      <main>
        <DescriptionsList descriptions={descriptions} />
      </main>

      <style jsx>{`
        .project-card-container {
          display: flex;
          flex-direction: column;
          // justify-content: center;
          // align-items: center;
          height: 600px;
          width: 100%;
          border-style: solid;
        }
        header {
          display: flex;
          flex: 1;
          justify-content: space-between;
          align-items: center;
          text-align: center;
        }

        figure {
          display: flex;
          flex: 6;
        }

        figure img {
          height: 100%;
          width: 100%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .contain {
          object-fit: contain;
        }

        // .cover {
        //   object-fit: cover;
        // }

        main {
          flex: 2;
          overflow: auto;
        }

        @media only screen and (max-width: 600px) {
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
