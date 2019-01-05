const Banner = props => {
  const { text } = props;

  return (
    <div className="banner-container">
      <h1 className="font banner-font">{text}</h1>
      <style jsx>{`
        .banner-container {
          background: #31708e;
          height: 100px;
          width: 100%;
          display: flex;
          align-items: center;
        }

        .banner-font {
          font-size: 50px;
          color: #f7f9fb;
          font-weight: 1;
          text-indent: 50px;
        }
      `}</style>
    </div>
  );
};

export default Banner;
