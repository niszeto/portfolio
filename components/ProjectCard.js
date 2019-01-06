import DescriptionsList from "../components/DescriptionsList";
import IconButtonsList from "../components/IconButtonsList";

const ProjectCard = props => {
  const { title, image, links, descriptions } = props.data;

  return (
    <div className="project-card-container box-shadow">
      <figure>
        <img className="cover" src={image} />
      </figure>

      <header>
        <h1 className="header-font font">{title}</h1>
        <IconButtonsList data={links} />
      </header>

      <article>
        <DescriptionsList descriptions={descriptions} />
      </article>
      {/* possible to add take away list with details and summary tags */}
      <style jsx>{`
        .project-card-container {
          display: flex;
          flex-direction: column;
          height: 600px;
          width: 100%;
          margin: 20px;
          background-color: #f7f9fb;
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
          height: auto;
          max-height: 400px;
          width: 100%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        // .contain {
        //   object-fit: contain;
        // }

        .cover {
          object-fit: cover;
        }

        article {
          display: flex;
          flex: 2;
          overflow: auto;
          padding: 10px;
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
