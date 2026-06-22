export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "10px",
        margin: "5px",
        borderRadius: "6px",
        border: "1px solid #ccc"
      }}
    />
  );
}