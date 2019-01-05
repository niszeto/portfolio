import IconButtonsList from "./IconButtonsList";
import ContactData from "../data/Contact";

const Footer = props => {
  return (
    <div className="icon-link-container">
      <IconButtonsList data={ContactData} />
      <style jsx>
        {`
          .icon-link-container {
            // flex: 1;
            padding: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
