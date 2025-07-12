import React, { useState } from "react";
import BookCard from "./BookCard";

const categories = [
  { key: "new", label: "New Releases" },
  { key: "bestselling", label: "Bestselling" },
  { key: "popular", label: "Popular" },
];

export default function Slider({ books, addToCart, addToWishlist }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const currentCategory = categories[currentIndex];
  const filteredBooks = books.filter((b) => b.tags.includes(currentCategory.key));

  return (
    <section className="slider">
      <h2>{currentCategory.label}</h2>
      <div className="slider-controls">
        <button onClick={prev}>←</button>
        <div className="slider-books">
          {filteredBooks.length === 0 ? (
            <p>No books found.</p>
          ) : (
            filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            ))
          )}
        </div>
        <button onClick={next}>→</button>
      </div>
    </section>
  );
}
