import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './EmailTemplateEditor.css';
import EmailTemplatePreview from './EmailTemplatePreview';

const EmailTemplateEditor = () => {
  const [templateName, setTemplateName] = useState('');
  const [subject, setSubject] = useState('');
  const [templateContent, setTemplateContent] = useState('');

  const editorRef = useRef(null);
  const lastRange = useRef(null);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ align: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'list',
    'bullet',
    'link'
  ];

  const handleSelectionChange = (range) => {
    if (range) {
      lastRange.current = range;
    }
  };

  const insertVariable = (variable) => {
    const editor = editorRef.current.getEditor();

    const range = lastRange.current || {
      index: editor.getLength(),
      length: 0
    };

    editor.focus();
    editor.insertText(range.index, variable);
    editor.setSelection(range.index + variable.length, 0);

    lastRange.current = {
      index: range.index + variable.length,
      length: 0
    };
  };

  const handleSave = () => {
    if (!templateName.trim()) {
      alert('Please enter a template name.');
      return;
    }

    if (!subject.trim()) {
      alert('Please enter an email subject.');
      return;
    }

    if (!templateContent.trim()) {
      alert('Please enter email content.');
      return;
    }

    console.log({
      templateName,
      subject,
      content: templateContent
    });

    alert('Template saved successfully!');
  };

  const handleReset = () => {
    setTemplateName('');
    setSubject('');
    setTemplateContent('');

    if (editorRef.current) {
      editorRef.current.getEditor().setText('');
    }
  };

  return (
    <div className="app-layout">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">🛡️</div>

          <div>
            <div className="brand-name">
              Phish<span>Guard</span>
            </div>

            <div className="brand-subtitle">
              Email Awareness Platform
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">

          <div className="nav-item">
            <span>⌂</span>
            Dashboard
          </div>

          <div className="nav-item active">
            <span>✉</span>
            Template Builder
          </div>

          <div className="nav-item">
            <span>📢</span>
            Campaigns
          </div>

          <div className="nav-item">
            <span>▤</span>
            Templates
          </div>

          <div className="nav-item">
            <span>♙</span>
            Users
          </div>

          <div className="nav-item">
            <span>▥</span>
            Reports
          </div>

          <div className="nav-item">
            <span>⚙</span>
            Settings
          </div>

        </nav>

        <div className="sidebar-footer">
          <div className="footer-shield">✓</div>

          <div>
            <strong>Better Awareness</strong>
            <span>Safer Tomorrow</span>
          </div>
        </div>

      </aside>

      {/* Main Area */}
      <div className="main-area">

        {/* Top Header */}
        <header className="top-header">

          <div className="header-title">
            Template Builder
          </div>

          <div className="header-right">

            <div className="notification">
              ♧
            </div>

            <div className="profile">
              <div className="profile-circle">
                S
              </div>

              <span>Sehajleen</span>
              <span className="dropdown">⌄</span>
            </div>

          </div>

        </header>

        {/* Main Content */}
        <main className="content">

          {/* Hero */}
          <section className="hero">

            <div className="hero-icon">
              ✉
            </div>

            <div className="hero-text">
              <h1>Create Email Template</h1>

              <p>
                Design and customize an email template for your awareness campaign.
              </p>
            </div>

            <div className="hero-decoration">
              <div className="hero-envelope">✉</div>
              <div className="hero-shield">🛡️</div>
            </div>

          </section>

          {/* Workspace */}
          <div className="workspace">

            {/* Editor Card */}
            <section className="editor-card">

              {/* Template Information */}
              <div className="form-grid">

                <div className="form-group">
                  <label>
                    <span className="label-icon">▧</span>
                    Template Name
                    <span className="required">*</span>
                  </label>

                  <input
                    type="text"
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                    placeholder="e.g. Password Reset Simulation"
                  />
                </div>

                <div className="form-group">
                  <label>
                    <span className="label-icon">✉</span>
                    Email Subject
                    <span className="required">*</span>
                  </label>

                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Important: Action Required"
                  />
                </div>

              </div>

              {/* Variables */}
              <div className="variables-section">

                <div className="section-heading">

                  <div className="section-icon">
                    ✿
                  </div>

                  <div>
                    <h3>Insert Variables</h3>

                    <p>
                      Click a variable to insert it into your email
                    </p>
                  </div>

                </div>

                <div className="variable-buttons">

                  <button
                    type="button"
                    className="variable name-variable"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => insertVariable('{{name}}')}
                  >
                    <span className="variable-plus">+</span>

                    <strong>Name</strong>

                    <code>{'{{name}}'}</code>
                  </button>

                  <button
                    type="button"
                    className="variable department-variable"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => insertVariable('{{department}}')}
                  >
                    <span className="variable-plus">+</span>

                    <strong>Department</strong>

                    <code>{'{{department}}'}</code>
                  </button>

                  <button
                    type="button"
                    className="variable date-variable"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => insertVariable('{{date}}')}
                  >
                    <span className="variable-plus">+</span>

                    <strong>Date</strong>

                    <code>{'{{date}}'}</code>
                  </button>

                </div>

              </div>

              {/* Divider */}
              <div className="divider"></div>

              {/* Email Editor */}
              <div className="email-section">

                <div className="section-heading">

                  <div className="section-icon">
                    ✎
                  </div>

                  <div>
                    <h3>Email Content</h3>
                  </div>

                </div>

                <div className="quill-container">

                  <ReactQuill
                    ref={editorRef}
                    theme="snow"
                    value={templateContent}
                    onChange={setTemplateContent}
                    onChangeSelection={handleSelectionChange}
                    modules={modules}
                    formats={formats}
                    placeholder="Write your email template here..."
                  />

                  <div className="editor-footer">

                    <span>
                      ✎ Powered by React Quill
                    </span>

                    <span>
                      {templateContent.replace(/<[^>]*>/g, '').length} characters
                    </span>

                  </div>

                </div>

              </div>

              {/* Bottom Actions */}
              <div className="actions">

                <button
                  type="button"
                  className="reset-button"
                  onClick={handleReset}
                >
                  ↻
                  Reset
                </button>

                <button
                  type="button"
                  className="save-button"
                  onClick={handleSave}
                >
                  ▣
                  Save Template
                </button>

              </div>

            </section>

            {/* Right Sidebar */}
            {/* Right Preview + Sidebar */}
<div className="preview-column">

  {/* Email Preview */}
  <EmailTemplatePreview
    templateContent={templateContent}
    subject={subject}
  />

  {/* Quick Tips */}
  <aside className="tips-panel">

    <div className="tips-card">

      <div className="tips-title">
        <span>💡</span>
        Quick Tips
      </div>

      <div className="tip">
        <span className="check">✓</span>

        <p>
          Use variables to personalize your emails and make them more realistic.
        </p>
      </div>

      <div className="tip">
        <span className="check">✓</span>

        <p>
          Keep your message clear and concise.
        </p>
      </div>

      <div className="tip">
        <span className="check">✓</span>

        <p>
          Use a professional tone and avoid suspicious links or attachments.
        </p>
      </div>

    </div>

    <div className="awareness-card">

      <div className="paper-plane">
        ➤
      </div>

      <h3>
        Realistic Emails.
        <br />
        Better Awareness.
      </h3>

      <div className="awareness-line"></div>

    </div>

  </aside>

</div>

          </div>

        </main>

      </div>

    </div>
  );
};

export default EmailTemplateEditor;