import IconButton from "./IconButton";

const IconButtonsList = props => {
  const { data } = props;

  return (
    <div className="icon-buttons-container">
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
      <style jsx>{`
        .icon-buttons-container {
          display: flex;
          // flex-grow: 1;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
};

export default IconButtonsList;
