export default function Gallery() {
  const images = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png",
  ];

  return (
    <main style={{ padding: "40px", fontFamily: "Arial", background: "#f9fafb" }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "10px", color: "#111827" }}>
        School Gallery
      </h1>

      <p style={{ marginBottom: "25px", color: "#6b7280" }}>
        Moments of learning, events and celebrations
      </p>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              background: "white",
            }}
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                transition: "0.3s",
              }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
