import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  // ✅ SAFE DUMMY DATA (NO FETCH = NO ERRORS)
  const [items] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
  ]);

  return (
    <div className={darkMode ? "home-container dark" : "home-container"}>

      {/* TOGGLE BUTTON */}
      <button
        className="toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* BACKGROUND EFFECT */}
      <div className="bg-circle one"></div>
      <div className="bg-circle two"></div>

      {/* HERO SECTION */}
      <div className="hero">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1 className="title">Batch Trace Pro 🚀</h1>

          <p className="subtitle">
            Smart batch tracking, management and visualization system.
          </p>

          <div className="btn-group">
            <button onClick={() => navigate("/login")} className="btn primary">
              Login
            </button>

            <button onClick={() => navigate("/about")} className="btn secondary">
              About
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="card">

            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
              alt="logo"
              className="logo"
            />

            <h2>Welcome 👋</h2>

            <p>
              Track batches and manage everything in one place.
            </p>

            <button
              onClick={() => navigate("/dashboard")}
              className="card-btn"
            >
              Go to Dashboard
            </button>

            <button
              onClick={() => navigate("/showcase")}
              className="card-btn dark"
            >
              Showcase
            </button>

          </div>
        </div>

      </div>

      {/* ✅ API SECTION (SAFE STATIC DISPLAY) */}
      <div style={{ marginTop: "30px", textAlign: "center", color: darkMode ? "white" : "black" }}>
        <h3>Items</h3>

        {items.map((item) => (
          <p key={item.id}>
            {item.id} - {item.name}
          </p>
        ))}
      </div>

    </div>
  );
};

export default Home;