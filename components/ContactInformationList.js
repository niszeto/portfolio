import ContactInformation from "./ContactInformation";

const ContactInformationList = props => {
  const { data } = props;

  return (
    <div>
      {data.map((information, index) => {
        return (
          <ContactInformation
            text={information.text}
            redirectLink={information.redirectLink}
            iconURI={information.iconURI}
            contactInformation={information.contactInformation}
            key={index}
            id={index}
          />
        );
      })}
    </div>
  );
};

export default ContactInformationList;
