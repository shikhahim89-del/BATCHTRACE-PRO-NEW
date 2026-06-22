import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Users</h3>
          <p>120+</p>
        </div>

        <div style={styles.card}>
          <h3>Projects</h3>
          <p>8 Active</p>
        </div>

        <div style={styles.card}>
          <h3>Performance</h3>
          <p>92%</p>
        </div>
      </div>

      <button style={styles.button} onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "60px",
    fontFamily: "Arial",
  },

  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },

  card: {
    width: "150px",
    padding: "20px",
    background: "#f4f6ff",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
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