function Button(props) {
  console.log('->', props);

  return <button>{props.sendingProps}</button>;
}

export default Button;
