export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "#f9fafb",
        padding: "20px"
      }}>
        
        <h1 style={{
          fontSize: "40px",
          fontWeight: "bold",
          color: "#1f2937"
        }}>
          St. Xavier's Jr./Sr. School
        </h1>

        <p style={{
          fontSize: "18px",
          marginTop: "10px",
          color: "#4b5563"
        }}>
          Goshala Road, Muzaffarpur, Bihar
        </p>

        <div style={{ marginTop: "20px" }}>
          <button style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: "#1f2937",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}>
            Explore School
          </button>

          <button style={{
            padding: "10px 20px",
            background: "white",
            color: "#1f2937",
            border: "1px solid #1f2937",
            borderRadius: "8px"
          }}>
            View Gallery
          </button>
        </div>

      </section>
    </main>
  );
}