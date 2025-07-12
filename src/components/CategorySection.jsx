import React from "react";
import BookSlider from "./BookSlider";

export default function CategorySection({ title, books }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>{title}</h2>
      <BookSlider books={books} />
    </div>
  );
}
