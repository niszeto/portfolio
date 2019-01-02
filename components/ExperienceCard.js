import DescriptionsList from "./DescriptionsList";
import Header from "./Header";

const ExperienceCard = props => {
  const {
    companyLogo,
    companyName,
    jobTitle,
    descriptions,
    startDate,
    endDate,
    companyCity,
    companyState
  } = props.data;

  return (
    <div className="experience-card-container">
      <Header imageURI={companyLogo} title={companyName} text={jobTitle} />
      <article>
        <DescriptionsList descriptions={descriptions} />
      </article>
      <footer>
        <h1>{`${startDate} - ${endDate}`}</h1>
        <h1>|</h1>
        <h1>{`${companyCity}, ${companyState}`}</h1>
      </footer>
      <style jsx>{`
        .experience-card-container {
          width: 80%;
          margin: auto;
          border-style: solid;
          display: flex;
          flex-direction: column;
          background-color: green;
        }

        article {
          display: flex;
          flex-direction: column;
          background-color: blue;
          padding: 5px;
        }
        footer {
          display: flex;
          padding: 5px;
        }

        footer h1 {
          margin: 5px;
        }

        @media screen and (max-width: 700px) {
          footer {
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer h1 {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ExperienceCard;
