import React, { useState } from "react";
import "./PageBuilder.css";

function PageBuilder() {
  const [elements, setElements] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("#f5f7fb");
  const [textColor, setTextColor] = useState("#1f2937");
  const [selectedTemplate, setSelectedTemplate] = useState("default");

  const handleDragStart = (event, type) => {
    event.dataTransfer.setData("elementType", type);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const type = event.dataTransfer.getData("elementType");

    if (!type) return;

    const newElement = {
      id: Date.now(),
      type: type,
    };

    setElements((previous) => [...previous, newElement]);
  };

  const removeElement = (id) => {
    setElements((previous) =>
      previous.filter((element) => element.id !== id)
    );
  };

  const applyTemplate = (template) => {
  setSelectedTemplate(template);

  if (template === "microsoft") {
    setBackgroundColor("#eef3ff");
    setTextColor("#172554");
  }

  if (template === "google") {
    setBackgroundColor("#f8fafc");
    setTextColor("#1e293b");
  }

  if (template === "apple") {
    setBackgroundColor("#e5e7eb");
    setTextColor("#111827");
  }
};
  const renderElement = (element) => {
    switch (element.type) {
      case "text":
        return (
          <input
            className="preview-input"
            type="text"
            placeholder="Email or username"
            disabled
          />
        );

      case "password":
        return (
          <input
            className="preview-input"
            type="password"
            placeholder="Password"
            disabled
          />
        );

      case "checkbox":
        return (
          <label className="checkbox-element">
            <input type="checkbox" disabled />
            Remember me
          </label>
        );

      case "submit":
        return (
          <button className="preview-button" disabled>
            Sign in
          </button>
        );

      case "forgot":
        return (
          <div className="forgot-link">
            Forgot password?
          </div>
        );

      case "social":
        return (
          <button className="social-button" disabled>
            Continue with Google
          </button>
        );

      default:
        return null;
    }
  };

  return (
    <div className="page-builder">

      {/* Sidebar */}
      <aside className="builder-sidebar">

        <div className="sidebar-title">
          <h2>Page Builder</h2>
          <p>Build a training page</p>
        </div>

        <div className="sidebar-section">
          <h3>Form Elements</h3>

          <div
            className="drag-item"
            draggable
            onDragStart={(event) =>
              handleDragStart(event, "text")
            }
          >
            📝 Email / Username
          </div>

          <div
            className="drag-item"
            draggable
            onDragStart={(event) =>
              handleDragStart(event, "password")
            }
          >
            🔒 Password Field
          </div>

          <div
            className="drag-item"
            draggable
            onDragStart={(event) =>
              handleDragStart(event, "checkbox")
            }
          >
            ☑️ Remember Me
          </div>

          <div
            className="drag-item"
            draggable
            onDragStart={(event) =>
              handleDragStart(event, "forgot")
            }
          >
            🔗 Forgot Password
          </div>

          <div
            className="drag-item"
            draggable
            onDragStart={(event) =>
              handleDragStart(event, "submit")
            }
          >
            🔘 Submit Button
          </div>

          <div
            className="drag-item"
            draggable
            onDragStart={(event) =>
              handleDragStart(event, "social")
            }
          >
            🌐 Social Login
          </div>
        </div>

        {/* Templates */}
        <div className="sidebar-section">
          <h3>Style Templates</h3>

          <button
            className={`template-button ${
              selectedTemplate === "microsoft"
                ? "active"
                : ""
            }`}
            onClick={() => applyTemplate("microsoft")}
          >
            Microsoft Style
          </button>

          <button
            className={`template-button ${
              selectedTemplate === "google"
                ? "active"
                : ""
            }`}
            onClick={() => applyTemplate("google")}
          >
            Google Style
          </button>

          <button
            className={`template-button ${
              selectedTemplate === "apple"
                ? "active"
                : ""
            }`}
            onClick={() => applyTemplate("apple")}
          >
            Apple Style
          </button>
        </div>

      </aside>

      {/* Main Area */}
      <main className="builder-main">

        <div className="builder-header">
          <div>
            <h1>Training Page Designer</h1>
            <p>
              Drag elements into the preview area
            </p>
          </div>

          <button className="preview-mode-button">
            👁 Preview
          </button>
        </div>

        <div className="builder-workspace">

          {/* Canvas */}
          <div
  className={`page-canvas template-${selectedTemplate}`}
  style={{
    backgroundColor: backgroundColor,
    color: textColor,
  }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >

            <div className="training-badge">
              SECURITY AWARENESS SIMULATION
            </div>

            <div className={`login-card card-${selectedTemplate}`}>

              <div className="mock-logo">
                🔐
              </div>

              <h2>Training Login Page</h2>

              <p className="simulation-text">
                This is a controlled security-awareness
                simulation.
              </p>

              {elements.length === 0 && (
                <div className="empty-canvas">
                  <div className="empty-icon">＋</div>
                  <h3>Drop elements here</h3>
                  <p>
                    Drag an element from the left panel
                    to start building your page.
                  </p>
                </div>
              )}

              {elements.map((element) => (
                <div
                  className="canvas-element"
                  key={element.id}
                >
                  {renderElement(element)}

                  <button
                    className="remove-element"
                    onClick={() =>
                      removeElement(element.id)
                    }
                  >
                    ×
                  </button>
                </div>
              ))}

            </div>
          </div>

          {/* Style Panel */}
          <div className="style-panel">

            <h3>Appearance</h3>

            <label>
              Background Color
            </label>

            <input
              type="color"
              value={backgroundColor}
              onChange={(event) =>
                setBackgroundColor(event.target.value)
              }
            />

            <label>
              Text Color
            </label>

            <input
              type="color"
              value={textColor}
              onChange={(event) =>
                setTextColor(event.target.value)
              }
            />

            <div className="style-info">
              <strong>Elements:</strong>{" "}
              {elements.length}
            </div>

            <button
              className="clear-button"
              onClick={() => setElements([])}
            >
              Clear Canvas
            </button>

          </div>

        </div>
      </main>
    </div>
  );
}

export default PageBuilder;