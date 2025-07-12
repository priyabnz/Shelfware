import React, { useState } from "react";
import Header from "./Header";
import BookList from "./BookList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Slider from "./Slider";
import "./index.css";
import BannerSlider from "./components/BannerSlider";
import BookSlider from "./components/BookSlider";
import { books } from "./booksData"; // use your book data here
import CategoryTabs from "./components/CategoryTabs";

export default function App() {
  const [cart, setCart] = useState([]); // {book, qty}
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [...new Set(books.map((book) => book.category))];

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

 const addToCart = (book) => {
  setCart((prevCart) => {
    const existing = prevCart.find((item) => item.book.id === book.id);
    if (existing) {
      return prevCart.map((item) =>
        item.book.id === book.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      return [...prevCart, { book, qty: 1 }];
    }
  });
};
  const addToWishlist = (book) => setWishlist((prev) => [...prev, book]);

const removeFromCart = (id) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.book.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0)
  );
};
const searchResults = search.trim()
  ? books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    )
  : [];

  return (
    <div className="app">
      <div className="top-bar">
         <p>📍 Delivering to Sydney, NSW — Free shipping on orders over $50!</p>
       </div>
     <Header
        search={search}
        setSearch={setSearch}
        cart={cart}
        removeFromCart={removeFromCart}
        wishlistCount={wishlist.length}
      />
      <div className="container">
  {searchResults.length > 0 ? (
    // If search is active, only show filtered results
    <BookList
      books={searchResults}
      addToCart={addToCart}
      addToWishlist={addToWishlist}
    />
  ) : (
    <>
      <BannerSlider />
      <BookSlider
        title="🔥 New Releases"
        filterTag="new"
        addToCart={addToCart}
        addToWishlist={addToWishlist}
      />
      <BookSlider
        title="⭐ Bestsellers"
        filterTag="bestselling"
        addToCart={addToCart}
        addToWishlist={addToWishlist}
      />
      <BookSlider
        title="📈 Popular Books"
        filterTag="popular"
        addToCart={addToCart}
        addToWishlist={addToWishlist}
      />
      <div className="content">
        <CategoryTabs
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <BookList
          books={filteredBooks}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
        />
      </div>
    </>
  )}
</div>
      <footer>
        <p>&copy; 2025 Shelfware Bookstore</p>
      </footer>
    </div>
  );
}
