const IconButton = props => {
  const { redirectLink, iconURI } = props;

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
          margin: 0 5px 0 5px;
          pading: 5px;
          border-radius: 10%;
        }

        .button:hover {
          // background-color: #687864;
          // background-color: #31708e;
          background-color: #5085a5;
          // background-color: #8fc1e3;
          // background-color: #f7f9fb;
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          height: 40px;
          width: 40px;
        }
      `}</style>
    </div>
  );
};

export default IconButton;
