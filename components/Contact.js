import Banner from "./Banner";
import ContactInformationList from "./ContactInformationList";
import ContactData from "../data/Contact";

const Contact = props => {
  return (
    <div id="contact" className="contact-container">
      <Banner text="Contact" />
      <div className="contact-content">
        <ContactInformationList data={ContactData} />
      </div>

      <style jsx>{`
        .contact-container {
          height: 300px;
        }
        .contact-content {
          border-style: solid;
          width: 80%;
          margin: auto;
          margin-top: 5px;
        }

        @media only screen and (max-width: 600px) {
          .contact-container {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
