import { useState } from "react";
import Item from "./Item";
import SortBy from "./SortBy";

export default function ShoppingItems({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = items;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "a-z") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "z-a") {
    sortedItems = items
      .slice()
      .sort((a, b) => b.description.localeCompare(a.description));
  }

  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <SortBy onSortBy={setSortBy} sortBy={sortBy} onClearList={onClearList} />
    </div>
  );
}
