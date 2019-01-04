const CaptionPicture = props => {
  const { imageURL, caption } = props;

  return (
    <div className="caption-card-container">
      <figure>
        <img src={imageURL} />
      </figure>
      <figcaption>
        <h1>{caption}</h1>
      </figcaption>
      <style jsx>{`
        .caption-card-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 250px;
          width: 200px;
          background-color: red;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default CaptionPicture;
