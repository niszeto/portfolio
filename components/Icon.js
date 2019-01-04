const Icon = props => {
  const { iconURI } = props;

  console.log(props.iconURI);

  return (
    <div>
      <img src={iconURI} />
      <style jsx>{`
        img {
          height: 30px;
          width: 30px;
        }
      `}</style>
    </div>
  );
};

export default Icon;
