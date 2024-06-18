export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentPacked = (packedItems / numItems) * 100;

  return (
    <footer className="stats">
      {items.length > 0 && percentPacked !== 100 && (
        <em>
          {numItems} items in the list. Packed {packedItems} items (
          {percentPacked} %) 🛒
        </em>
      )}
      {!items.length && <em>Start adding items</em>}
      {percentPacked === 100 && <em>You got everything!</em>}
    </footer>
  );
}
