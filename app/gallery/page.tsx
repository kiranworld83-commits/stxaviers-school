export default function Gallery() {
  const labs = [
    "/labs/lab1.jpg",
    "/labs/lab2.jpg",
    "/labs/lab3.jpg"
  ];

  const sports = [
    "/sports/basketball1.jpg",
    "/sports/basketball2.jpg",
    "/sports/tabletennis1.jpg"
  ];

  const events = [
    "/events/event1.jpg",
    "/events/event2.jpg",
    "/events/event3.jpg"
  ];

  const Section = ({ title, images }) => {
    return (
      <div style={{ marginBottom: "40px" }}>
        
        <h2 style={{
          fontSize: "22px",
          marginBottom: "15px",
          color: "#1e3a8a"
        }}>
          {title}
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px"
        }}>
          {images.map((img, i) => (
            <div
              key={i}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                background: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transition: "0.3s"
              }}
            >
              <img
                src={img}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover"
                }}
                onClick={() => window.open(img, "_blank")}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main style={{
      padding: "30px",
      fontFamily: "Arial",
      background: "#f9fafb"
    }}>
      
      <h1 style={{
        fontSize: "32px",
        marginBottom: "10px",
        color: "#111827"
      }}>
        School Gallery
      </h1>

      <p style={{
        marginBottom: "25px",
        color: "#6b7280"
      }}>
        Moments of learning, sports, and celebrations
      </p>

      <Section title="Labs" images={labs} />
      <Section title="Sports" images={sports} />
      <Section title="Events" images={events} />

    </main>
  );
}
