export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 15px",
        margin: "5px",
        border: "none",
        borderRadius: "6px",
        background: "#4facfe",
        color: "white",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
}