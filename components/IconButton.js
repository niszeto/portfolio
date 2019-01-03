const IconButton = props => {
  const { redirectLink, iconURI } = props;
  console.log(props);

  return (
    <div className="button">
      <a href={redirectLink}>
        <img src={iconURI} />
      </a>

      <style jsx>{`
        .button {
          cursor: pointer;
          height: 50px;
          width: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .button:hover {
          background-color: #f4f4f4;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          height: 50px;
          width: 50px;
        }
      `}</style>
    </div>
  );
};

export default IconButton;
