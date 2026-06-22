function Navbar({ setPage }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      background: "#111",
      color: "white"
    }}>
      <h3>BatchTrace Pro</h3>

      <div>
        <span onClick={() => setPage("home")} style={link}>Home</span>
        <span onClick={() => setPage("about")} style={link}>About</span>
        <span onClick={() => setPage("dashboard")} style={link}>Dashboard</span>
        <span onClick={() => setPage("login")} style={link}>Login</span>
      </div>
    </div>
  );
}

const link = {
  margin: "0 10px",
  cursor: "pointer"
};

export default Navbar;