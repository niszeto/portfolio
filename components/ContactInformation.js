import IconButton from "./IconButton";

const ContactInformation = props => {
  const { text, redirectLink, iconURI, contactInformation } = props;

  return (
    <div className="contact-information-container">
      <strong>{text}</strong>
      <IconButton redirectLink={redirectLink} iconURI={iconURI} />
      <strong>{contactInformation}</strong>
      <style jsx>{`
        .contact-information-container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        @media only screen and (max-width: 600px) {
          .contact-information-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          strong {
          }
        }
      `}</style>
    </div>
  );
};

export default ContactInformation;
