import React, { useState } from "react";
import "./BannerSlider.css";

const bannerSlides = [
  {
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1470&q=80",
    title: "📚 Dive Into the Classics",
    subtitle: "Timeless stories — now 30% OFF!",
  },
  {
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=1470&q=80",
    title: "🔥 Fresh Arrivals",
    subtitle: "Explore the most anticipated releases of this year.",
  },
  {
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1470&q=80",
    title: "🌈 Your Weekend Reads",
    subtitle: "Curl up with a good book this weekend.",
  },
  {
    image: "https://images.unsplash.com/photo-1558888402-49f5b5712c38?auto=format&fit=crop&w=1470&q=80",
    title: "🎁 Gifting Made Easy",
    subtitle: "Surprise your loved ones with a good read.",
  },
  {
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1470&q=80",
    title: "💡 Expand Your Mind",
    subtitle: "Self-help, science, and non-fiction bestsellers.",
  },
];


export default function BannerSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % bannerSlides.length);
  const prev = () => setIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);

  const { image, title, subtitle } = bannerSlides[index];

  return (
    <div
      className="banner-slide"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="overlay">
        <div className="text-content">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <button className="nav left" onClick={prev}>❮</button>
        <button className="nav right" onClick={next}>❯</button>
      </div>
    </div>
  );
}
