import React from "react";

export default function CategoryTabs({ categories, selected, onSelect }) {
  return (
    <div className="category-tabs">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          className={cat === selected ? "active" : ""}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
