import DescriptionsList from "../components/DescriptionsList";
import IconButtonsList from "../components/IconButtonsList";

const ProjectCard = props => {
  const { title, image, links, descriptions, summary } = props.data;

  return (
    <div className="project-card-container box-shadow">
      <div className="project-card-content">
        <figure>
          <img className="contain" src={image} />
        </figure>

        <div className="container padding-ten">
          <header>
            <h1 className="header-font font indent">{title}</h1>
            <IconButtonsList data={links} />
          </header>
          <hr />

          <div className="container padding-ten">
            <p className="font font-color">{summary}</p>
            <details>
              <summary className="font header-font">Acknowledgements</summary>
              <DescriptionsList descriptions={descriptions} />
            </details>
          </div>
        </div>
      </div>
      <style jsx>{`
        .project-card-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          margin: 20px;
          background-color: #f7f9fb;
        }

        .container {
          width: 95%;
          margin: auto;
        }

        figure img {
          height: auto;
          width: 100%;
        }

        .contain {
          object-fit: contain;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        summary {
          margin: 10px 0;
        }

        @media only screen and (max-width: 600px) {
          header {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
