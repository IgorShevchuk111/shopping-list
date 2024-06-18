export default function SortBy({ onSortBy, sortBy, onClearList }) {
  return (
    <div>
      <select value={sortBy} onChange={(e) => onSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="a-z">Sort A - Z</option>
        <option value="z-a">Sort Z - A</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button onClick={onClearList}>Clear list</button>
    </div>
  );
}
