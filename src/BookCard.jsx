import React from "react";

export default function BookCard({ book, addToCart, addToWishlist }) {
  return (
    <div className="card">
      <img src={book.cover} alt={book.title} />
      <div className="card-content">
        <h2>{book.title}</h2>
        <p>by {book.author}</p>
        <p>${book.price.toFixed(2)}</p>
        <p>{"★".repeat(book.rating)}{"☆".repeat(5 - book.rating)}</p>
        <button onClick={() => addToCart(book)}>Add to Cart</button>
        <button onClick={() => addToWishlist(book)}>❤️ Wishlist</button>
      </div>
    </div>
  );
}
