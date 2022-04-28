export default function Box(props) {
  //const id = props.key; it's not right, as we don't have access to key in the component class. instead we can pass the id here and say: const id = props.id

  const styles = {
    backgroundColor: props.onState ? "gray" : "black",
  };

  return (
    <div
      className='box'
      style={styles}
      onClick={(event) => props.clickHandler(props.id)}
    ></div>
  );
}
