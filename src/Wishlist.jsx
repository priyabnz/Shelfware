import React from "react";

export default function Wishlist({ wishlist, removeFromWishlist }) {
  if (wishlist.length === 0)
    return (
      <section className="wishlist">
        <h2>❤️ Wishlist</h2>
        <p>No items in wishlist.</p>
      </section>
    );

  return (
    <section className="wishlist">
      <h2>❤️ Wishlist</h2>
      <ul>
        {wishlist.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
