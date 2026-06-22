export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px"
      }}>
        {children}
        <br />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}