import DescriptionsList from "./DescriptionsList";

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
      <header>
        <div className="job-information-container">
          <img src={companyLogo} />
          <h1>{companyName}</h1>
        </div>
        <div className="job-title-container">
          <h1>{jobTitle}</h1>
        </div>
      </header>
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

        header {
          background-color: red;
          display: flex;
          justify-content: space-between;
          padding: 10px;
        }

        header div img {
          margin: 0 10px 0 10px;
        }

        .job-information-container {
          display: flex;
          align-items: center;
        }

        .job-title-container {
          display: flex;
          align-items: center;
        }

        article {
          display: flex;
          flex-direction: column;
          background-color: blue;
          padding: 5px;
        }
        img {
          height: 50px;
          width: 50 px;
        }
        footer {
          display: flex;
          padding: 5px;
        }

        footer h1 {
          margin: 5px;
        }

        @media screen and (max-width: 700px) {
          header {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;
          }
          .job-information-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .job-title-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          header div h1 {
            text-align: center;
          }
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
