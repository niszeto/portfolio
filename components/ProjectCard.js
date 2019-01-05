import DescriptionsList from "../components/DescriptionsList";
import IconButtonsList from "../components/IconButtonsList";

const ProjectCard = props => {
  const { title, image, links, descriptions } = props.data;

  return (
    <div className="project-card-container box-shadow">
      <figure>
        <img className="contain" src={image} />
      </figure>

      <header>
        <h1>{title}</h1>
        <IconButtonsList data={links} />
      </header>

      <article>
        <DescriptionsList descriptions={descriptions} />
      </article>

      <style jsx>{`
        .project-card-container {
          display: flex;
          flex-direction: column;
          // justify-content: center;
          // align-items: center;
          height: 600px;
          width: 100%;
          margin: 10px;
        }
        header {
          display: flex;
          flex: 1;
          justify-content: space-between;
          align-items: center;
          width: 95%;
          text-align: center;
          margin: auto;
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

        article {
          display: flex;
          flex: 2;
          overflow: auto;
          // align-items: center;
        }

        @media only screen and (max-width: 600px) {
          figure {
            display: flex;
            flex: 2;
          }
          header {
            display: flex;
            flex: 0.75;
            flex-direction: column;
            justify-content: space-evenly;
            // align-items: center;
            text-align: center;
            background-color: green;
          }
          article {
            flex: 1;
            overflow: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
