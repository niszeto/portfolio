import IconButtonsList from "./IconButtonsList";
import ContactData from "../data/Contact";

const Footer = props => {
  return (
    <div className="icon-link-container">
      <IconButtonsList data={ContactData} />
      <style jsx>
        {`
          .icon-link-container {
            flex: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
