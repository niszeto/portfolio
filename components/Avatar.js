import AvatarData from "../data/Avatar";

const Avatar = props => {
  const { imageURI, name, caption } = AvatarData;

  return (
    <div className="avatar-container">
      <img src={imageURI} />
      <strong className="font">{name}</strong>
      <small className="font">{caption}</small>
      <style jsx>{`
        .avatar-container {
          display: flex;
          // flex: 2;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 10px;
        }
        img {
          height: 150px;
          width: 150px;
          border-radius: 50%;
          margin: 10px;
        }
      `}</style>
    </div>
  );
};

export default Avatar;
