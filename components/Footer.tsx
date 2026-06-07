export default function Footer() {
  return (
    <footer style={{
      marginTop: "50px",
      padding: "30px",
      background: "#f3f4f6",
      textAlign: "center"
    }}>
      
      <h3 style={{ marginBottom: "10px" }}>
        St. Xavier's Jr./Sr. School
      </h3>

      <p style={{ color: "#6b7280", marginBottom: "15px" }}>
        Goshala Road, Muzaffarpur, Bihar
      </p>

      {/* Social Buttons */}
      <div style={{ marginBottom: "15px" }}>
        <a 
          href="https://www.facebook.com/share/18eBYhAwQr/" 
          target="_blank"
          style={{ marginRight: "10px", textDecoration: "none", color: "#2563eb" }}
        >
          Facebook
        </a>

        <a 
          href="https://www.instagram.com/stxavierjrsrschool/" 
          target="_blank"
          style={{ textDecoration: "none", color: "#db2777" }}
        >
          Instagram
        </a>
      </div>

      <p style={{ fontSize: "12px", color: "#9ca3af" }}>
        © 2026 St. Xavier's Jr./Sr. School. All rights reserved.
      </p>

    </footer>
  );
}
