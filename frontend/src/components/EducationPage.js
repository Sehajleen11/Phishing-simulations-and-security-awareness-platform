import React, { useState } from "react";

function EducationPage() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Security Alert */}
        <div style={styles.alert}>
          <div style={styles.alertIcon}>🛡️</div>
          <div>
            <h2 style={styles.alertTitle}>Security Awareness Alert</h2>
            <p style={styles.alertText}>
              This was a simulated phishing attempt created for
              security-awareness training.
            </p>
          </div>
        </div>

        {/* What Happened */}
        <section style={styles.card}>
          <div style={styles.sectionIcon}>🎣</div>
          <h2>What Just Happened?</h2>

          <p style={styles.paragraph}>
            You interacted with a fake login page as part of a
            controlled phishing-awareness simulation.
          </p>

          <p style={styles.paragraph}>
            Phishing attacks often use convincing emails and
            login pages to trick people into revealing sensitive
            information.
          </p>

          <div style={styles.infoBox}>
            <strong>Remember:</strong>
            <p>
              In this simulation, your password was not collected
              or stored. Never enter a real password into a
              suspicious website.
            </p>
          </div>
        </section>

        {/* Warning Signs */}
        <section style={styles.card}>
          <div style={styles.sectionIcon}>🔍</div>
          <h2>How to Spot a Phishing Attack</h2>

          <div style={styles.tip}>
            <span>🌐</span>
            <div>
              <strong>Check the URL</strong>
              <p>
                Make sure the website address belongs to the
                legitimate organization.
              </p>
            </div>
          </div>

          <div style={styles.tip}>
            <span>⚠️</span>
            <div>
              <strong>Watch for urgency</strong>
              <p>
                Messages demanding immediate action are a common
                phishing technique.
              </p>
            </div>
          </div>

          <div style={styles.tip}>
            <span>✉️</span>
            <div>
              <strong>Check the sender</strong>
              <p>
                Carefully examine the sender's email address and
                domain.
              </p>
            </div>
          </div>

          <div style={styles.tip}>
            <span>🔗</span>
            <div>
              <strong>Don't blindly click links</strong>
              <p>
                Hover over links and verify where they actually
                lead before opening them.
              </p>
            </div>
          </div>

          <div style={styles.tip}>
            <span>🔐</span>
            <div>
              <strong>Never reuse passwords</strong>
              <p>
                Use strong, unique passwords and enable
                multi-factor authentication whenever possible.
              </p>
            </div>
          </div>
        </section>

        {/* Quiz */}
        <section style={styles.card}>
          <div style={styles.sectionIcon}>🧠</div>
          <h2>Quick Security Quiz</h2>

          <p style={styles.question}>
            You receive an email saying your account will be
            locked in 10 minutes unless you click a link.
            What should you do?
          </p>

          <button
            style={
              selectedAnswer === "A"
                ? styles.selectedButton
                : styles.quizButton
            }
            onClick={() => handleAnswer("A")}
          >
            A. Click the link immediately
          </button>

          <button
            style={
              selectedAnswer === "B"
                ? styles.correctButton
                : styles.quizButton
            }
            onClick={() => handleAnswer("B")}
          >
            B. Verify the message through the official website
          </button>

          <button
            style={
              selectedAnswer === "C"
                ? styles.selectedButton
                : styles.quizButton
            }
            onClick={() => handleAnswer("C")}
          >
            C. Forward it to everyone
          </button>

          {selectedAnswer && (
            <div
              style={
                selectedAnswer === "B"
                  ? styles.correctMessage
                  : styles.wrongMessage
              }
            >
              {selectedAnswer === "B"
                ? "✅ Correct! Always verify suspicious requests using an official channel."
                : "❌ Not quite. Don't click suspicious links. Verify the request through an official website or trusted contact."}
            </div>
          )}
        </section>

        {/* Best Practices */}
        <section style={styles.card}>
          <div style={styles.sectionIcon}>✅</div>
          <h2>Security Best Practices</h2>

          <ul style={styles.list}>
            <li>Use strong and unique passwords.</li>
            <li>Enable multi-factor authentication.</li>
            <li>Keep your operating system and applications updated.</li>
            <li>Verify unexpected login or payment requests.</li>
            <li>Report suspicious emails to your security team.</li>
            <li>Think before clicking links or opening attachments.</li>
          </ul>
        </section>

        {/* Final Message */}
        <div style={styles.footer}>
          <div style={styles.footerIcon}>🔒</div>
          <h2>Think Before You Click</h2>
          <p>
            One moment of verification can prevent a successful
            phishing attack.
          </p>

          <button
            style={styles.finishButton}
            onClick={() => (window.location.href = "/")}
          >
            Return to Training
          </button>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f1f5f9",
    fontFamily: "Arial, sans-serif",
    padding: "40px 20px",
  },

  container: {
    maxWidth: "850px",
    margin: "0 auto",
  },

  alert: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    background: "#fff7ed",
    border: "1px solid #fed7aa",
    borderRadius: "16px",
    padding: "22px",
    marginBottom: "25px",
  },

  alertIcon: {
    fontSize: "42px",
  },

  alertTitle: {
    margin: "0 0 6px",
    color: "#9a3412",
  },

  alertText: {
    margin: 0,
    color: "#7c2d12",
  },

  card: {
    background: "white",
    borderRadius: "18px",
    padding: "30px",
    marginBottom: "25px",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
  },

  sectionIcon: {
    fontSize: "32px",
    marginBottom: "8px",
  },

  paragraph: {
    color: "#475569",
    lineHeight: "1.7",
  },

  infoBox: {
    background: "#eff6ff",
    borderLeft: "4px solid #2563eb",
    padding: "15px 18px",
    borderRadius: "8px",
    marginTop: "20px",
    color: "#1e3a8a",
  },

  tip: {
    display: "flex",
    gap: "15px",
    padding: "16px 0",
    borderBottom: "1px solid #e2e8f0",
  },

  question: {
    color: "#334155",
    fontSize: "16px",
    lineHeight: "1.6",
  },

  quizButton: {
    width: "100%",
    textAlign: "left",
    padding: "14px",
    marginTop: "10px",
    border: "1px solid #cbd5e1",
    borderRadius: "10px",
    background: "#f8fafc",
    cursor: "pointer",
    fontSize: "15px",
  },

  selectedButton: {
    width: "100%",
    textAlign: "left",
    padding: "14px",
    marginTop: "10px",
    border: "1px solid #ef4444",
    borderRadius: "10px",
    background: "#fef2f2",
    cursor: "pointer",
    fontSize: "15px",
  },

  correctButton: {
    width: "100%",
    textAlign: "left",
    padding: "14px",
    marginTop: "10px",
    border: "1px solid #22c55e",
    borderRadius: "10px",
    background: "#f0fdf4",
    cursor: "pointer",
    fontSize: "15px",
  },

  correctMessage: {
    marginTop: "18px",
    padding: "15px",
    borderRadius: "10px",
    background: "#dcfce7",
    color: "#166534",
  },

  wrongMessage: {
    marginTop: "18px",
    padding: "15px",
    borderRadius: "10px",
    background: "#fee2e2",
    color: "#991b1b",
  },

  list: {
    color: "#475569",
    lineHeight: "2",
    paddingLeft: "25px",
  },

  footer: {
    textAlign: "center",
    background: "#0f172a",
    color: "white",
    borderRadius: "18px",
    padding: "35px",
  },

  footerIcon: {
    fontSize: "45px",
  },

  finishButton: {
    marginTop: "15px",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default EducationPage;