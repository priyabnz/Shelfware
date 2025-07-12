import React from "react";

export default function BookList({ books, addToCart, addToWishlist }) {
  return (
    <div className="book-grid">
      {books.length === 0 ? (
        <p>No books in this category.</p>
      ) : (
        books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.cover} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p><strong>${book.price.toFixed(2)}</strong></p>
            <div>
              <button className="add-to-cart-btn m-r-10" onClick={() => addToCart(book)}>Add to Cart</button>
              <button className="add-to-cart-btn " onClick={() => addToWishlist(book)}>Wishlist</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
