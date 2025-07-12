import React, { useState } from "react";

export default function Header({ search, setSearch, cart, removeFromCart, wishlistCount }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <header>
      <h1>📚 Shelfware</h1>
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="nav-icons">
      <div className="cart-wrapper">
        <span onClick={() => setShowCart(!showCart)} style={{ cursor: "pointer" }}>
          🛒 {cart.reduce((acc, item) => acc + item.qty, 0)}
        </span>
        <span>❤️ {wishlistCount}</span>
      </div>

      {showCart && (
        <div className="cart-dropdown">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.book.id}>
                  {item.book.title} x {item.qty}
                  <button onClick={() => removeFromCart(item.book.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      </div>
    </header>
  );
}
