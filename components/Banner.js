const Banner = props => {
  const { text } = props;

  return (
    <div className="banner-container">
      <h1>{text}</h1>
      <style jsx>{`
        .banner-container {
          background: blue;
          height: 100px;
          width: 100%;
          display: flex;
          align-items: center;
        }

        h1 {
          margin: 25px;
        }
      `}</style>
    </div>
  );
};

export default Banner;
