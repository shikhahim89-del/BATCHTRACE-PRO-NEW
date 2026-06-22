import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login</h2>

        <input placeholder="Username" style={styles.input} />
        <input placeholder="Password" type="password" style={styles.input} />

        <button
          style={styles.button}
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>

        <button
          style={styles.secondary}
          onClick={() => navigate("/")}
        >
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
    width: "280px",
  },

  input: {
    display: "block",
    width: "100%",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  button: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#4facfe",
    color: "white",
    cursor: "pointer",
    marginTop: "10px",
  },

  secondary: {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#eee",
    marginTop: "10px",
    cursor: "pointer",
  },
};