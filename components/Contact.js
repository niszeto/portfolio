import Banner from "./Banner";
import ContactInformationList from "./ContactInformationList";
import ContactData from "../data/Contact";

const Contact = props => {
  return (
    <div id="contact" className="contact-container">
      <Banner text="Contact" />
      <div className="contact-content box-shadow">
        <ContactInformationList data={ContactData} />
      </div>

      <style jsx>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .contact-content {
          width: 80%;
          margin: auto;
          margin: 20px;
          padding: 10px;
        }

        @media only screen and (max-width: 600px) {
          .contact-container {
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
