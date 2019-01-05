import AvatarData from "../data/Avatar";

const Avatar = props => {
  const { name, imageURI } = AvatarData;

  return (
    <div className="avatar-container">
      <img src={imageURI} />
      <strong>{name}</strong>
      <style jsx>{`
        .avatar-container {
          display: flex;
          // flex: 2;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
