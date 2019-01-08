import IconButton from "./IconButton";

const ContactInformation = props => {
  const { text, redirectLink, iconURI, contactInformation } = props;

  return (
    <div className="contact-information-container">
      <div className="contact-information-content padding-ten">
        <strong className="font header-font indent">{`${text} : `}</strong>
        <IconButton redirectLink={redirectLink} iconURI={iconURI} />
        <a className="font font-color" href={redirectLink}>
          {contactInformation}
        </a>
      </div>
      {/* <br /> */}
      <style jsx>{`
        .contact-information-container {
          display: flex;
          flex-direction: column;
        }

        .contact-information-content {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        @media only screen and (max-width: 600px) {
          .contact-information-content {
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactInformation;
