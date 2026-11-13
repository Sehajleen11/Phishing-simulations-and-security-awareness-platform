import React, { useEffect, useState } from "react";

const SamplingOptions = ({
  totalUsers,
  onSampleChange
}) => {

  const [samplingMethod, setSamplingMethod] =
    useState("all");

  const [sampleValue, setSampleValue] =
    useState(10);

  useEffect(() => {

    let sampleSize = totalUsers;

    if (samplingMethod === "percentage") {
      sampleSize = Math.floor(
        totalUsers * sampleValue / 100
      );
    }

    if (samplingMethod === "absolute") {
      sampleSize = Math.min(
        sampleValue,
        totalUsers
      );
    }

    onSampleChange({
      method: samplingMethod,
      size: sampleSize
    });

  }, [
    samplingMethod,
    sampleValue,
    totalUsers,
    onSampleChange
  ]);

  const handleMethodChange = (method) => {

    setSamplingMethod(method);

    if (method === "percentage") {
      setSampleValue(10);
    }

    if (method === "absolute") {
      setSampleValue(
        Math.min(1, totalUsers)
      );
    }
  };

  const handleValueChange = (value) => {
    setSampleValue(value);
  };

  const percentageUsers = Math.floor(
    totalUsers * sampleValue / 100
  );

  return (
    <div className="sampling-options">

      <h3>Target Selection Method</h3>

      <label className="sampling-option">

        <input
          type="radio"
          checked={samplingMethod === "all"}
          onChange={() =>
            handleMethodChange("all")
          }
        />

        <div>
          <strong>All Users</strong>
          <span>
            Select all {totalUsers} available users
          </span>
        </div>

      </label>

      <label className="sampling-option">

        <input
          type="radio"
          checked={samplingMethod === "percentage"}
          onChange={() =>
            handleMethodChange("percentage")
          }
        />

        <div>
          <strong>Percentage of Users</strong>
          <span>
            Randomly select a percentage
          </span>
        </div>

      </label>

      {samplingMethod === "percentage" && (

        <div className="sampling-control">

          <input
            type="range"
            min="1"
            max="100"
            value={sampleValue}
            onChange={(e) =>
              handleValueChange(
                parseInt(e.target.value)
              )
            }
          />

          <strong>
            {sampleValue}% ({percentageUsers} users)
          </strong>

        </div>

      )}

      <label className="sampling-option">

        <input
          type="radio"
          checked={samplingMethod === "absolute"}
          onChange={() =>
            handleMethodChange("absolute")
          }
        />

        <div>
          <strong>Specific Number</strong>
          <span>
            Select a specific number of users
          </span>
        </div>

      </label>

      {samplingMethod === "absolute" && (

        <div className="sampling-control">

          <input
            type="number"
            min="1"
            max={totalUsers}
            value={sampleValue}
            onChange={(e) =>
              handleValueChange(
                parseInt(e.target.value) || 1
              )
            }
          />

          <span>
            of {totalUsers} users
          </span>

        </div>

      )}

    </div>
  );
};

export default SamplingOptions;