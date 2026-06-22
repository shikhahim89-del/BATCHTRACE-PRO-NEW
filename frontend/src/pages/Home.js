import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "home-container dark" : "home-container"}>

      {/* TOGGLE BUTTON */}
      <button 
        className="toggle-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* Background decoration */}
      <div className="bg-circle one"></div>
      <div className="bg-circle two"></div>

      {/* HERO SECTION */}
      <div className="hero">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1 className="title">
            Batch Trace Pro 🚀
          </h1>

          <p className="subtitle">
            Smart batch tracking, management and visualization system for real-time insights and control.
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

        {/* RIGHT SIDE CARD */}
        <div className="hero-right">
          <div className="card">

            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
              alt="logo"
              className="logo"
            />

            <h2>Welcome 👋</h2>
            <p>
              Track batches, analyze data, and manage everything in one place.
            </p>

            <button onClick={() => navigate("/dashboard")} className="card-btn">
              Go to Dashboard
            </button>

            <button onClick={() => navigate("/showcase")} className="card-btn dark">
              Showcase
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;