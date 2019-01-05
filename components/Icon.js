const Icon = props => {
  const { iconURI } = props;

  return (
    <div>
      <img src={iconURI} />
      <style jsx>{`
        img {
          margin-left: 10px;
          margin-right: 10px;
          height: 30px;
          width: 30px;
        }
      `}</style>
    </div>
  );
};

export default Icon;
