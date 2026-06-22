export default function Toast({ message }) {
  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "#333",
      color: "white",
      padding: "10px",
      borderRadius: "5px"
    }}>
      {message}
    </div>
  );
}