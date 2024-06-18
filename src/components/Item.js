export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
        type="checkbox"
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
