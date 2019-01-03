import IconButton from "./IconButton";

const IconButtonsList = props => {
  const { data } = props;

  return (
    <div>
      {data.map((link, index) => {
        const { redirectLink, iconURI } = link;
        return (
          <IconButton
            redirectLink={redirectLink}
            iconURI={iconURI}
            key={index}
            id={index}
          />
        );
      })}
      <style jsx>{``}</style>
    </div>
  );
};

export default IconButtonsList;
