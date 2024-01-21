function Btn(props) {
  console.log(props);

  return <button onClick={props.Fn}>{props.btnText}</button>;
}

export default Btn;
