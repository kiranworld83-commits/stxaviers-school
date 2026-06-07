export default function About() {
  return (
    <main style={{ fontFamily: "Arial", padding: "30px" }}>

      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        About Our School
      </h1>

      {/* SCHOOL INTRO */}
      <section style={{ marginBottom: "30px" }}>
        <p style={{ color: "#4b5563", lineHeight: "1.6" }}>
          Our school is committed to providing quality education with discipline,
          modern facilities, and a strong focus on student growth and development.
          We aim to build a strong foundation for every learner.
        </p>
      </section>

      {/* MESSAGES */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>

        {[
          {
            title: "Principal Message",
            text: "We focus on discipline, learning, and overall development of students."
          },
          {
            title: "Director Message",
            text: "Our mission is to provide quality education with modern facilities."
          },
          {
            title: "Chairman Message",
            text: "We believe in building a strong educational foundation for future leaders."
          }
        ].map((item, i) => (
          <div key={i} style={{
            padding: "20px",
            background: "#f3f4f6",
            borderRadius: "10px"
          }}>
            <h3>{item.title}</h3>
            <p style={{ color: "#6b7280" }}>{item.text}</p>
          </div>
        ))}

      </div>

    </main>
  );
      }
