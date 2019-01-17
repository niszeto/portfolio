const Paragraph = props => {
  const { paragraph } = props;

  return (
    <div className="paragraph-container">
      <div className="paragraph-content padding-ten">
        <p className="font font-size font-color">{paragraph}</p>
      </div>
    </div>
  );
};

export default Paragraph;
