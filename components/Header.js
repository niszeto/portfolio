const Header = props => {
  const { imageURI, title, text } = props;

  return (
    <header>
      <div className="title-container">
        <img src={imageURI} />
        <h1>{title}</h1>
      </div>
      <div className="text-container">
        <h1>{text}</h1>
      </div>
      <style jsx>{`
        header {
          background-color: red;
          display: flex;
          justify-content: space-between;
          padding: 10px;
        }

        header div img {
          margin: 0 10px 0 10px;
          height: 50px;
          width: 50px;
        }

        .title-container {
          display: flex;
          align-items: center;
        }

        .text-container {
          display: flex;
          align-items: center;
        }

        @media screen and (max-width: 700px) {
          header {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;
          }
          .title-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .text-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          header div h1 {
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
