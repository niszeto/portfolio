import Paragraph from "./Paragraph";

const ParagraphsList = props => {
  const { data } = props;

  return (
    <div className="paragraph-list-container">
      {data.map((paragraph, index) => {
        return <Paragraph paragraph={paragraph} id={index} key={index} />;
      })}
    </div>
  );
};

export default ParagraphsList;
