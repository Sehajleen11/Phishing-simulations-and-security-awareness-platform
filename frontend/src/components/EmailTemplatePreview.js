import React, { useEffect, useState } from 'react';
import './EmailTemplatePreview.css';

const EmailTemplatePreview = ({ templateContent, subject }) => {

  const [previewMode, setPreviewMode] = useState('desktop');

  const [editableVariables, setEditableVariables] = useState({
    name: 'John Doe',
    department: 'Marketing',
    date: new Date().toLocaleDateString()
  });

  const handleVariableChange = (key, value) => {
    setEditableVariables((previous) => ({
      ...previous,
      [key]: value
    }));
  };

  const replaceVariables = (content) => {
    let processedContent = content || '';

    Object.entries(editableVariables).forEach(([key, value]) => {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');

      processedContent = processedContent.replace(
        regex,
        value
      );
    });

    return processedContent;
  };

  const processedContent = replaceVariables(templateContent);

  useEffect(() => {
    // Keeps the preview updated whenever the editor changes.
  }, [templateContent, editableVariables]);

  return (
    <div className="preview-card">

      {/* Preview Header */}
      <div className="preview-header">

        <div className="preview-title">

          <div className="preview-icon">
            ◉
          </div>

          <div>
            <h2>Email Preview</h2>
            <p>See how your email will appear to recipients</p>
          </div>

        </div>

        {/* Desktop / Mobile Toggle */}
        <div className="preview-toggle">

          <button
            type="button"
            className={previewMode === 'desktop' ? 'active' : ''}
            onClick={() => setPreviewMode('desktop')}
          >
            🖥 Desktop
          </button>

          <button
            type="button"
            className={previewMode === 'mobile' ? 'active' : ''}
            onClick={() => setPreviewMode('mobile')}
          >
            📱 Mobile
          </button>

        </div>

      </div>

      {/* Preview Workspace */}
      <div className="preview-workspace">

        <div className={`device-preview ${previewMode}`}>

          {previewMode === 'mobile' && (
            <div className="mobile-notch"></div>
          )}

          {/* Email Window */}
          <div className="email-window">

            {/* Email Top Bar */}
            <div className="email-topbar">

              <div className="email-circle">
                P
              </div>

              <div className="email-sender">

                <strong>PhishGuard Awareness</strong>

                <span>
                  awareness@phishguard.local
                </span>

              </div>

              <div className="email-actions">
                ☆
              </div>

            </div>

            {/* Subject */}
            <div className="email-subject">

              {subject || 'Your email subject will appear here'}

            </div>

            {/* Email Content */}
            <div
              className="email-body"
              dangerouslySetInnerHTML={{
                __html:
                  processedContent ||
                  '<p>Your email content will appear here...</p>'
              }}
            />

          </div>

          {previewMode === 'mobile' && (
            <div className="mobile-home-indicator"></div>
          )}

        </div>

      </div>

      {/* Preview Variables */}
      <div className="preview-variables">

        <div className="variables-heading">

          <div>
            <h3>Preview Variables</h3>

            <p>
              Change these values to see how personalization works.
            </p>
          </div>

          <span className="live-badge">
            ● LIVE
          </span>

        </div>

        <div className="preview-variable-grid">

          <div className="preview-variable">

            <label>
              Name
            </label>

            <input
              type="text"
              value={editableVariables.name}
              onChange={(e) =>
                handleVariableChange('name', e.target.value)
              }
            />

          </div>

          <div className="preview-variable">

            <label>
              Department
            </label>

            <input
              type="text"
              value={editableVariables.department}
              onChange={(e) =>
                handleVariableChange(
                  'department',
                  e.target.value
                )
              }
            />

          </div>

          <div className="preview-variable">

            <label>
              Date
            </label>

            <input
              type="text"
              value={editableVariables.date}
              onChange={(e) =>
                handleVariableChange(
                  'date',
                  e.target.value
                )
              }
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default EmailTemplatePreview;