const Avatar = () => {
  return (
    <div className="avatar-container">
      <img src="/static/profile.png" />
      <strong>Nicholas Szeto</strong>
      <style jsx>{`
        .avatar-container {
          background-color: red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 1;
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
