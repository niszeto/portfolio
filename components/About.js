import Banner from "./Banner";

const About = props => {
  return (
    <div>
      <Banner text="about" />
      <p>{props.text}</p>
      <style jsx>{`
        p {
          margin: auto;
          width: 95%;
        }
      `}</style>
    </div>
  );
};

export default About;
