const Header = props => {
  const { imageURI, establishment, role, website } = props;

  return (
    <header className="padding-ten">
      <div className="establishment-container">
        <img src={imageURI} />
        <a href={website}>
          <h1 className="font header-font">{establishment}</h1>
        </a>
      </div>
      <div className="role-container">
        <h1 className="font header-font">{role}</h1>
      </div>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
        }

        header div img {
          margin: 0 10px 0 10px;
          height: 50px;
          width: 50px;
        }

        .establishment-container {
          display: flex;
          align-items: center;
        }

        .role-container {
          display: flex;
          align-items: center;
        }

        @media screen and (max-width: 600px) {
          header {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;
          }
          .establishment-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .role-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          h1 {
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
