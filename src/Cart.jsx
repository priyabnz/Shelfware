import React from "react";

export default function Cart({ cart, removeFromCart, updateCartQty }) {
  const total = cart.reduce((sum, item) => sum + item.book.price * item.qty, 0);

  if (cart.length === 0) return <section className="cart"><h2>🛒 Cart</h2><p>Your cart is empty.</p></section>;

  return (
    <section className="cart">
      <h2>🛒 Cart</h2>
      <ul>
        {cart.map(({ book, qty }) => (
          <li key={book.id}>
            <span>{book.title} - ${book.price.toFixed(2)}</span>
            <span>
              Qty:{" "}
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => updateCartQty(book.id, Number(e.target.value))}
                style={{ width: "50px" }}
              />
              <button onClick={() => removeFromCart(book.id)}>Remove</button>
            </span>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </section>
  );
}
