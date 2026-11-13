import React, { useEffect, useState } from 'react';
import { fetchTemplates } from '../../../services/templateService';

const Step1_TemplateSelection = ({
  data,
  updateData,
  nextStep
}) => {

  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(
    data.template || null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTemplates = async () => {
      const result = await fetchTemplates();

      setTemplates(result);
      setLoading(false);
    };

    loadTemplates();
  }, []);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);

    updateData({
      template: template
    });
  };

  const handleNext = () => {
    if (selectedTemplate) {
      nextStep();
    }
  };

  return (
    <div className="template-selection">

      <div className="wizard-heading">
        <h2>Select Email Template</h2>
        <p>
          Choose the phishing simulation template you want to use
          for this campaign.
        </p>
      </div>

      {loading ? (
        <div className="loading">
          Loading templates...
        </div>
      ) : templates.length === 0 ? (
        <div className="empty-state">
          <h3>No templates found</h3>
          <p>
            Create an email template first before creating a campaign.
          </p>
        </div>
      ) : (

        <div className="template-grid">

          {templates.map((template) => (

            <div
              key={template.id}
              className={`template-card ${
                selectedTemplate?.id === template.id
                  ? 'selected'
                  : ''
              }`}
              onClick={() => handleTemplateSelect(template)}
            >

              {template.previewImage ? (
                <img
                  src={template.previewImage}
                  alt={template.name}
                  className="template-preview-image"
                />
              ) : (
                <div className="template-placeholder">
                  📧
                </div>
              )}

              <div className="template-card-content">

                <h3>
                  {template.name}
                </h3>

                <p>
                  {template.description ||
                    'Email simulation template'}
                </p>

              </div>

              {selectedTemplate?.id === template.id && (
                <div className="selected-badge">
                  ✓ Selected
                </div>
              )}

            </div>

          ))}

        </div>

      )}

      <div className="wizard-actions">

        <button
          className="next-button"
          onClick={handleNext}
          disabled={!selectedTemplate}
        >
          Next →
        </button>

      </div>

    </div>
  );
};

export default Step1_TemplateSelection;