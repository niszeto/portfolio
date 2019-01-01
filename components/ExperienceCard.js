import DescriptionsList from "./DescriptionsList";

const ExperienceCard = props => {
  const { company, jobTitle, descriptions, jobDuration, location } = props;

  const bullets = [
    "Mentored a team of three biology students to design, plan, and implement a web application used to predict parent cats’ offspring traits.",
    "Facilitated weekly meetings to discuss current progress, reflect on problems encountered, and plans for future work.",
    "Provided suggestions, direction, and both emotional and technical support to the team when desired plans do not proceed as expected or when unforeseen events occur."
  ];

  return (
    <div className="experience-card-container">
      <header>
        <div className="job-information-container">
          <img src="/static/profile.png" />
          <h1>San Francisco State University</h1>
        </div>
        <div className="job-title-container">
          <h1>PINC Mentor</h1>
        </div>
      </header>
      <article>
        <DescriptionsList descriptions={bullets} />
      </article>
      <footer>
        <h1>August 2017 - January 2018</h1>
        <h1>|</h1>
        <h1>San Francisco</h1>
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
