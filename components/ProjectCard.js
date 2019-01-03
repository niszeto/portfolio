const descriptions = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, a, ducimus earum nemo repudiandae quo quae non mollitia tempora iure alias unde dolor! Aperiam dolores ex, molestias a vero quia.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, a, ducimus earum nemo repudiandae quo quae non mollitia tempora iure alias unde dolor! Aperiam dolores ex, molestias a vero quia.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, a, ducimus earum nemo repudiandae quo quae non mollitia tempora iure alias unde dolor! Aperiam dolores ex, molestias a vero quia."
];

import DescriptionsList from "../components/DescriptionsList";

const ProjectCard = props => {
  return (
    <div className="project-card-container">
      <figure>
        <img
          className="cover"
          src="https://images3.alphacoders.com/723/thumb-1920-72397.jpg"
        />
      </figure>

      <header>
        <h1>Project Title</h1>
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
          // display: flex;
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

        .cover {
          object-fit: cover;
        }

        main {
          flex: 2;
          overflow: auto;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
