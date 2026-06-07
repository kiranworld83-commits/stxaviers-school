export default function Home() {
  return (
    <main style={{ fontFamily: "Arial" }}>

      {/* HERO SECTION */}
      <section style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#1e3a8a",
        color: "white"
      }}>
        <img
          src="/logo.png"
          style={{ width: "90px", borderRadius: "50%" }}
        />

        <h1 style={{ fontSize: "36px", marginTop: "15px" }}>
          St. Xavier’s Junior School
        </h1>

        <p style={{ marginTop: "10px", opacity: 0.9 }}>
          Excellence in Education • Discipline • Growth
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section style={{ padding: "40px 20px" }}>

        <h2>Our Facilities</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginTop: "20px"
        }}>

          {[
            "Labs",
            "Library",
            "Sports",
            "Swimming Pool",
            "Hostel",
            "Transport"
          ].map((item, i) => (
            <div key={i} style={{
              padding: "20px",
              background: "#f3f4f6",
              borderRadius: "10px",
              textAlign: "center"
            }}>
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* QUICK LINKS */}
      <section style={{ padding: "40px 20px", background: "#f9fafb" }}>
        <h2>Quick Access</h2>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a href="/gallery">Gallery</a>
          <a href="/about">About School</a>
        </div>
      </section>

    </main>
  );
}
