import Banner from "./Banner";
import ContactInformationList from "./ContactInformationList";
import ContactData from "../data/Contact";

const Contact = props => {
  return (
    <div className="contact-container">
      <Banner text="Contact" />
      <div className="contact-content">
        <ContactInformationList data={ContactData} />
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
