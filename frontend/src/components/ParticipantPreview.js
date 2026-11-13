import React, { useState } from "react";

function ParticipantPreview() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleTrainingSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!username.trim()) {
      setError("Please enter your username or email.");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/tracking/submit/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            campaign: 1,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Submission failed.");
        return;
      }

      setSubmitted(true);

    } catch (error) {
      console.error("Submission error:", error);
      setError("Unable to connect to the training server.");
    }
  };

  if (submitted) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.icon}>🛡️</div>

          <h1>Security Awareness Training</h1>

          <p>
            This was a controlled phishing-awareness simulation.
          </p>

          <p>
            In a real phishing attack, submitting information
            to an unknown website could expose your account.
          </p>

          <button
            style={styles.button}
            onClick={() => {
              window.location.href = "/education";
            }}
          >
            Continue to Education
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <div style={styles.logo}>
          🔐
        </div>

        <h1>Training Login</h1>

        <p style={styles.description}>
          This page is part of a controlled security-awareness
          simulation.
        </p>

        <form onSubmit={handleTrainingSubmit}>

          <input
            name="username"
            type="text"
            placeholder="Email or username"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
            style={styles.input}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            style={styles.input}
          />

          <label style={styles.checkbox}>
            <input type="checkbox" />
            Remember me
          </label>

          {error && (
            <p style={styles.error}>
              {error}
            </p>
          )}

          <button
            type="submit"
            style={styles.button}
          >
            Sign in
          </button>

        </form>

        <p style={styles.warning}>
          ⚠️ Training simulation — do not use real passwords.
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#eef2ff",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "white",
    padding: "40px",
    borderRadius: "18px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
    textAlign: "center",
  },

  logo: {
    fontSize: "45px",
    marginBottom: "15px",
  },

  icon: {
    fontSize: "55px",
  },

  description: {
    color: "#64748b",
    lineHeight: "1.5",
    marginBottom: "25px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px",
    marginBottom: "14px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "15px",
  },

  checkbox: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    marginBottom: "18px",
    color: "#475569",
    fontSize: "14px",
  },

  button: {
    width: "100%",
    padding: "13px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },

  error: {
    color: "#dc2626",
    fontSize: "14px",
    marginBottom: "15px",
  },

  warning: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#64748b",
  },
};

export default ParticipantPreview;