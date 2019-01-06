import IconButton from "./IconButton";

const ContactInformation = props => {
  const { text, redirectLink, iconURI, contactInformation } = props;

  return (
    <div className="contact-information-container">
      <strong className="font header-font">{`${text} : `}</strong>
      <IconButton redirectLink={redirectLink} iconURI={iconURI} />
      <a className="font font-color" href={redirectLink}>
        {contactInformation}
      </a>
      <style jsx>{`
        .contact-information-container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        strong {
          margin-left: 10px;
        }

        @media only screen and (max-width: 600px) {
          .contact-information-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactInformation;
