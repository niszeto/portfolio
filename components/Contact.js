import Banner from "./Banner";
import IconButton from "./IconButton";

const gitHubIconURI = "/static/GitHubIcon.png";
const gitHubRedirectLink = "https://github.com/niszeto";
const linkedInIconURI = "/static/LinkedInIcon.png";
const linkedInRedirectLink = "https://www.linkedin.com/in/nicholas-szeto/";

const Contact = props => {
  return (
    <div className="contact-container">
      <Banner text="Contact" />
      <div className="contact-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          recusandae sunt enim quam unde sequi dolore beatae animi harum
          molestiae? Itaque sint quo a porro maxime ad harum laboriosam
          molestiae!
        </p>

        <IconButton redirectLink={gitHubRedirectLink} iconURI={gitHubIconURI} />
        <IconButton
          redirectLink={linkedInRedirectLink}
          iconURI={linkedInIconURI}
        />
      </div>

      <style jsx>{`
        .contact-content {
          border-style: solid;
          width: 80%;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default Contact;
