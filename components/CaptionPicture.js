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
          justify-content: flex-end;
          align-items: center;
          height: 250px;
          width: 200px;
          // background-color: red;
        }
        img {
          height: auto;
          width: 100%;
          max-width: 150px;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default CaptionPicture;
