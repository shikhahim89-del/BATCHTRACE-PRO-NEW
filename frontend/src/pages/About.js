import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>About Batch Trace Pro</h2>

        <p>
          This is a React-based project designed for batch tracking and UI/UX practice.
        </p>

        <div style={styles.box}>
          <h4>Features</h4>
          <ul>
            <li>Login System</li>
            <li>Dashboard Analytics</li>
            <li>Component-based UI</li>
          </ul>
        </div>

        <button style={styles.button} onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f4ff",
    fontFamily: "Arial",
  },

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "300px",
  },

  box: {
    textAlign: "left",
    margin: "15px 0",
  },

  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    background: "#4facfe",
    color: "white",
    cursor: "pointer",
  },
};