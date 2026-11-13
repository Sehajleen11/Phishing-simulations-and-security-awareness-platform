import React from "react";

const Step4_Preview = ({ data, prevStep }) => {
    const handleLaunch = async () => {

  if (!template) {
    alert("Please select an email template first.");
    return;
  }

  if (targets.length === 0) {
    alert("Please select at least one target.");
    return;
  }

  try {

    const response = await fetch(
      "http://127.0.0.1:8000/api/campaigns/create/",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name: template.name
            ? `${template.name} Campaign`
            : "Security Awareness Campaign",

          scheduled_date: schedule.date
            ? `${schedule.date}T${schedule.time || "10:00"}:00`
            : null
        })
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error(result);
      alert("Campaign creation failed.");
      return;
    }

    console.log("Campaign created:", result);

    alert(
      `Campaign launched successfully!\nCampaign ID: ${result.campaign.id}`
    );

  } catch (error) {

    console.error("Launch error:", error);

    alert(
      "Could not connect to the Django server."
    );
  }
};

  const template = data?.template;
  const targets = data?.targets || [];
  const schedule = data?.schedule || {};

  return (
    <div className="wizard-step preview-step">

      {/* Header */}
      <div className="preview-header">
        <div>
          <h2>Campaign Preview</h2>
          <p>
            Review your campaign details before launching it.
          </p>
        </div>

        <div className="preview-status">
          Ready to Review
        </div>
      </div>


      {/* Template Section */}
      <div className="preview-section">

        <h3>📧 Selected Template</h3>

        {template ? (
          <div className="template-preview-card">

            <div className="template-preview-info">

              <h4>
                {template.name || "Email Template"}
              </h4>

              {template.description && (
                <p>{template.description}</p>
              )}

              {template.subject && (
                <div className="preview-detail">
                  <strong>Subject:</strong>
                  <span>{template.subject}</span>
                </div>
              )}

              {template.sender_name && (
                <div className="preview-detail">
                  <strong>Sender:</strong>
                  <span>{template.sender_name}</span>
                </div>
              )}

              {template.sender_email && (
                <div className="preview-detail">
                  <strong>Email:</strong>
                  <span>{template.sender_email}</span>
                </div>
              )}

            </div>

            {template.body && (
              <div className="email-body-preview">

                <h5>Email Content</h5>

                <div
                  dangerouslySetInnerHTML={{
                    __html: template.body
                  }}
                />

              </div>
            )}

          </div>
        ) : (
          <div className="empty-preview">
            ⚠️ No template selected.
          </div>
        )}

      </div>


      {/* Targets Section */}
      <div className="preview-section">

        <h3>👥 Target Audience</h3>

        <div className="summary-card">

          <div className="summary-number">
            {targets.length}
          </div>

          <div>
            <strong>Selected Users</strong>
            <p>
              Participants selected for this campaign.
            </p>
          </div>

        </div>

      </div>


      {/* Schedule Section */}
      <div className="preview-section">

        <h3>🗓️ Campaign Schedule</h3>

        {Object.keys(schedule).length > 0 ? (

          <div className="schedule-summary">

            {schedule.date && (
              <div>
                <strong>Date</strong>
                <span>{schedule.date}</span>
              </div>
            )}

            {schedule.time && (
              <div>
                <strong>Time</strong>
                <span>{schedule.time}</span>
              </div>
            )}

            {schedule.timezone && (
              <div>
                <strong>Timezone</strong>
                <span>{schedule.timezone}</span>
              </div>
            )}

            {schedule.deliveryRate && (
              <div>
                <strong>Delivery Rate</strong>
                <span>
                  {schedule.deliveryRate} emails/hour
                </span>
              </div>
            )}

          </div>

        ) : (

          <div className="empty-preview">
            No schedule configured.
          </div>

        )}

      </div>


      {/* Actions */}
      <div className="wizard-actions">

        <button
          className="back-button"
          onClick={prevStep}
        >
          ← Back
        </button>

        <button
  className="launch-button"
  disabled={!template}
  onClick={handleLaunch}
>
  🚀 Launch Campaign
</button>

      </div>

    </div>
  );
};

export default Step4_Preview;