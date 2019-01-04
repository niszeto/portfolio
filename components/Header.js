const Header = props => {
  const { imageURI, establishment, role, website } = props;

  return (
    <header>
      <div className="establishment-container">
        <img src={imageURI} />
        <a href={website}>
          <h1>{establishment}</h1>
        </a>
      </div>
      <div className="role-container">
        <h1>{role}</h1>
      </div>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          padding: 10px;
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

        @media screen and (max-width: 700px) {
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
          header div h1 {
            role-align: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
