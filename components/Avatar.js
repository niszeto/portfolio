import AvatarData from "../data/Avatar";

const Avatar = props => {
  const { imageURI, name, caption } = AvatarData;

  return (
    <div className="avatar-container">
      <img className="margin-ten" src={imageURI} />
      <strong className="font">{name}</strong>
      <em className="font font-color">{caption}</em>
      <style jsx>{`
        .avatar-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 10px;
        }
        img {
          height: 150px;
          width: 150px;
          border-radius: 50%;
        }

        strong {
          color: #31708e;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
};

export default Avatar;
