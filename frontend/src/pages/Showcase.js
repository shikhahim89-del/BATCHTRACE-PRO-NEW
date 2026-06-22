import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Showcase() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div style={styles.container}>
      <h2>UI Showcase</h2>

      <button style={styles.button} onClick={() => alert("Button Clicked")}>
        Test Button
      </button>

      <input style={styles.input} placeholder="Test Input" />

      <button style={styles.button} onClick={() => setShow(!show)}>
        Toggle Modal
      </button>

      {show && (
        <div style={styles.modal}>
          <p>This is a Modal</p>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      )}

      <div style={styles.toast}>This is Toast Message</div>

      <p>Loading Component: ⏳ Loading...</p>

      <button style={styles.back} onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "Arial",
  },

  button: {
    padding: "10px",
    margin: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#4facfe",
    color: "white",
    cursor: "pointer",
  },

  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  modal: {
    background: "white",
    padding: "20px",
    margin: "20px auto",
    width: "200px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    borderRadius: "8px",
  },

  toast: {
    background: "#333",
    color: "white",
    padding: "10px",
    width: "200px",
    margin: "20px auto",
    borderRadius: "6px",
  },

  back: {
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#eee",
    cursor: "pointer",
  },
};
