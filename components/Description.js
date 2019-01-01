const Description = props => {
  const { description, key } = props;

  return <li key={key}> {description}</li>;
};

export default Description;
