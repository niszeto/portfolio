import AvatarData from "../data/Avatar";

const Avatar = props => {
  const { imageURI, name, caption } = AvatarData;

  return (
    <div className="avatar-container margin-ten">
      <img className="margin-ten" src={imageURI} />
      <strong className="font">{name}</strong>
      <em className="font font-color">{caption}</em>
      <style jsx>{`
        .avatar-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
]        }
        img {
          height: auto;
          width: 125px;
          border-radius: 50%;
          object-fit: contain;
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
