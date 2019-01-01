const ExperienceCard = props => {
  const { company, jobTitle, description, time, location } = props;

  return (
    <div className="experience-card-container">
      <header>
        <img src="/static/profile.png" />
        <h1>San Francisco State University</h1>
        <h1>PINC Mentor</h1>
      </header>
      <article>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            officia nulla vero eius suscipit! Provident officia aspernatur, vel
            autem, illo aliquid asperiores voluptate ullam quibusdam pariatur,
            ad reiciendis tenetur tempore?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            officia nulla vero eius suscipit! Provident officia aspernatur, vel
            autem, illo aliquid asperiores voluptate ullam quibusdam pariatur,
            ad reiciendis tenetur tempore?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            officia nulla vero eius suscipit! Provident officia aspernatur, vel
            autem, illo aliquid asperiores voluptate ullam quibusdam pariatur,
            ad reiciendis tenetur tempore?
          </li>
        </ul>
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
        }

        article {
          display: flex;
          flex-direction: column;
        }

        ul {
          list-style-position: inside;
          margin: auto;
          width: 95%;
        }

        img {
          height: 50px;
          width: 50 px;
        }
        footer {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default ExperienceCard;
