export function Item(props) {
  return (
    <li>
      <input type="checkbox" onChange={() => props.onUpdate(props.item.id)} />
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.quantity} - {props.item.description}
      </span>
      <button onClick={() => props.onDelete(props.item.id)}>❌</button>
    </li>
  );
}
