import ContactInformation from "./ContactInformation";

const ContactInformationList = props => {
  const { data } = props;

  return (
    <div>
      {data.map((information, index) => {
        const { text, redirectLink, iconURI, contactInformation } = information;

        return (
          <ContactInformation
            text={text}
            redirectLink={redirectLink}
            iconURI={iconURI}
            contactInformation={contactInformation}
            key={index}
            id={index}
          />
        );
      })}
    </div>
  );
};

export default ContactInformationList;
