export default function Contact() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Contact Us
      </h1>

      {/* Address */}
      <h3>Address</h3>
      <p>Goshala Road, Muzaffarpur, Bihar</p>

      <br />

      {/* Phone */}
      <h3>Phone</h3>
      <p>+91 9334257335</p>
      <p>+91 9835061341</p>

      <br />

      {/* Email */}
      <h3>Email</h3>
      <p>helpdesk@stxaviers.org</p>
      <p>stxaviers76@gmail.com</p>

      <br />

      {/* Map */}
      <h3>Location</h3>
      <iframe
  src="https://www.google.com/maps?q=St+Xavier+Jr+Sr+School+Muzaffarpur+Bihar&output=embed"
  width="100%"
  height="300"
  style="border:0; border-radius:10px;"
  loading="lazy"
></iframe>

      <br /><br />

      {/* Social Buttons */}
      <div>
        <a href="https://www.facebook.com/share/18eBYhAwQr/" target="_blank">
          Facebook
        </a>

        {" | "}

        <a href="https://www.instagram.com/stxavierjrsrschool/" target="_blank">
          Instagram
        </a>
      </div>

    </main>
  );
}
