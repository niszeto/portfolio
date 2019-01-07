import DescriptionList from "./DescriptionsList";
import Header from "./Header";

const ExperienceCard = props => {
  const {
    logo,
    name,
    website,
    role,
    details,
    startDate,
    endDate,
    city,
    state
  } = props.data;

  return (
    <div className="card-container margin-ten padding-ten box-shadow">
      <Header
        imageURI={logo}
        establishment={name}
        website={website}
        role={role}
      />
      <hr />
      <article>
        <DescriptionList descriptions={details} />
      </article>
      <footer>
        <h1 className="font header-font indent">{`${startDate} - ${endDate} | ${city}, ${state}`}</h1>
      </footer>
      <style jsx>{`
        .card-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          background-color: #f7f9fb;
        }

        article {
          display: flex;
          flex-direction: column;
          padding: 5px;
        }
        footer {
          display: flex;
          padding: 5px;
        }

        footer h1 {
          margin: 5px;
        }

        @media screen and (max-width: 600px) {
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
