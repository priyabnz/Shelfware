// src/components/BookSlider.jsx
import React from "react";
import "./BookSlider.css";
import { books } from "../booksData";

export default function BookSlider({ title, filterTag = null, category = null,addToCart, addToWishlist }) {
  let filteredBooks = books;

  if (filterTag) {
    filteredBooks = books.filter((book) => book.tags.includes(filterTag));
  } else if (category) {
    filteredBooks = books.filter((book) => book.category === category);
  }

  return (
    <div className="book-slider-container">
      <h2 className="slider-title">{title}</h2>
      <div className="book-slider">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.cover} alt={book.title} className="book-cover" />
            <h4 className="book-title">{book.title}</h4>
            <p className="book-author">by {book.author}</p>
            <p className="book-price">${book.price.toFixed(2)}</p>
             <div>
              <button className="add-to-cart-btn m-r-10" onClick={() => addToCart(book)}>Add to Cart</button>
              <button className="add-to-cart-btn " onClick={() => addToWishlist(book)}>Wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
