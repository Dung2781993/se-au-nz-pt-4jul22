const ListItem = (props) => {
  if (!props.id || !props.value) {
    return null;
  }

  return <li className={props.value} key={props.id}>{props.value}</li>;
};

export default ListItem;
