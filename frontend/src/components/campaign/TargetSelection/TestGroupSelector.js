import React, { useState } from "react";

const TestGroupSelector = ({ onTestGroupChange }) => {

  const [enabled, setEnabled] = useState(false);

  const handleChange = (value) => {

    setEnabled(value);

    onTestGroupChange({
      enabled: value
    });
  };

  return (
    <div className="test-group-selector">

      <h3>Test Group</h3>

      <label className="test-group-option">

        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) =>
            handleChange(e.target.checked)
          }
        />

        <div>
          <strong>
            Send a test campaign first
          </strong>

          <span>
            Test the campaign before sending it
            to all selected participants.
          </span>
        </div>

      </label>

    </div>
  );
};

export default TestGroupSelector;