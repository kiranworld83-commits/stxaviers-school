"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "stxaviers.org" && password === "stxaviers.org") {
      setLoggedIn(true);
    } else {
      alert("Invalid Credentials");
    }
  };

  if (loggedIn) {
    return (
      <div style={{ padding: "40px", fontFamily: "Arial" }}>
        <h1>Admin Dashboard</h1>
        <p>Welcome </p>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      
      <div style={{
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        width: "300px"
      }}>
        
        <h2>Admin Login</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            background: "#1f2937",
            color: "white",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Login
        </button>

      </div>
    </div>
  );
}
