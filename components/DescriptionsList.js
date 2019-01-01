import Description from "./Description";

export default class DescriptionsList extends React.Component {
  render() {
    const { descriptions } = this.props;

    return (
      <ul>
        {descriptions.map((description, index) => {
          return <Description description={description} key={index} />;
        })}
        <style jsx>{`
          ul {
            list-style-position: inside;
            margin: auto;
            width: 95%;
          }
        `}</style>
      </ul>
    );
  }
}
