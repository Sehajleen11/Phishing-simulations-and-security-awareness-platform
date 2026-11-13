import React, { useState } from "react";
import "./Scheduling.css";

const Step3_Scheduling = ({ data, updateData, nextStep, prevStep }) => {
  const existingSchedule = data.schedule || {};

  const [date, setDate] = useState(existingSchedule.date || "");
  const [time, setTime] = useState(existingSchedule.time || "");
  const [timezone, setTimezone] = useState(
    existingSchedule.timezone || "Asia/Kolkata"
  );
  const [rateLimit, setRateLimit] = useState(
    existingSchedule.rateLimit || 10
  );

  const handleNext = () => {
    if (!date || !time) {
      alert("Please select a date and time.");
      return;
    }

    updateData({
      schedule: {
        date,
        time,
        timezone,
        rateLimit: Number(rateLimit)
      }
    });

    nextStep();
  };

  return (
    <div className="scheduling-page">

      <div className="schedule-header">
        <div>
          <h2>Schedule Campaign</h2>
          <p>
            Choose when this security-awareness campaign should run.
          </p>
        </div>

        <div className="schedule-icon">
          📅
        </div>
      </div>

      <div className="schedule-content">

        {/* DATE */}
        <div className="schedule-card">
          <div className="card-icon">📅</div>

          <div className="card-content">
            <label>Campaign Date</label>

            <input
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
            />

            <small>
              Select the date on which the campaign should begin.
            </small>
          </div>
        </div>

        {/* TIME */}
        <div className="schedule-card">
          <div className="card-icon">⏰</div>

          <div className="card-content">
            <label>Start Time</label>

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <small>
              The campaign will begin at this time.
            </small>
          </div>
        </div>

        {/* TIMEZONE */}
        <div className="schedule-card">
          <div className="card-icon">🌍</div>

          <div className="card-content">
            <label>Timezone</label>

            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <option value="Asia/Kolkata">
                Asia/Kolkata (UTC+05:30)
              </option>

              <option value="America/New_York">
                America/New_York (UTC-05:00)
              </option>

              <option value="Europe/London">
                Europe/London (UTC+00:00)
              </option>

              <option value="Asia/Tokyo">
                Asia/Tokyo (UTC+09:00)
              </option>

              <option value="Australia/Sydney">
                Australia/Sydney (UTC+10:00)
              </option>
            </select>

            <small>
              Times will be interpreted using this timezone.
            </small>
          </div>
        </div>

        {/* RATE LIMIT */}
        <div className="schedule-card">
          <div className="card-icon">🚦</div>

          <div className="card-content">
            <label>Delivery Rate</label>

            <div className="rate-row">
              <input
                type="number"
                min="1"
                max="100"
                value={rateLimit}
                onChange={(e) => setRateLimit(e.target.value)}
              />

              <span>participants / minute</span>
            </div>

            <small>
              Controls the delivery rate to prevent excessive system load.
            </small>
          </div>
        </div>

      </div>

      {/* SUMMARY */}
      <div className="schedule-summary">

        <h3>Schedule Summary</h3>

        <div className="summary-grid">

          <div>
            <span>Date</span>
            <strong>{date || "Not selected"}</strong>
          </div>

          <div>
            <span>Time</span>
            <strong>{time || "Not selected"}</strong>
          </div>

          <div>
            <span>Timezone</span>
            <strong>{timezone}</strong>
          </div>

          <div>
            <span>Delivery Rate</span>
            <strong>{rateLimit} / min</strong>
          </div>

        </div>

      </div>

      {/* ACTIONS */}
      <div className="schedule-actions">

        <button
          className="back-button"
          onClick={prevStep}
        >
          ← Back
        </button>

        <button
          className="continue-button"
          onClick={handleNext}
        >
          Continue →
        </button>

      </div>

    </div>
  );
};

export default Step3_Scheduling;