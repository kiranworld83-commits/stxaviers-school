export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 20px",
      background: "#111827",
      color: "white"
    }}>

      {/* LOGO + NAME */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="/logo.png"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%"
          }}
        />
        <span style={{ fontWeight: "bold" }}>
          St. Xavier’s School
        </span>
      </div>

      {/* LINKS */}
      <div style={{ display: "flex", gap: "15px" }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>Home</a>
        <a href="/gallery" style={{ color: "white", textDecoration: "none" }}>Gallery</a>
        <a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a>
      </div>

    </nav>
  );
}
