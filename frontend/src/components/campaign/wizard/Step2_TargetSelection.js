import React, { useMemo, useState } from "react";
import "../TargetSelection/TargetSelection.css";

import FilterPanel from "../TargetSelection/FilterPanel";
import UserList from "../TargetSelection/UserList";
import SamplingOptions from "../TargetSelection/SamplingOptions";
import TestGroupSelector from "../TargetSelection/TestGroupSelector";

const Step2_TargetSelection = ({
  data,
  updateData,
  nextStep,
  prevStep
}) => {

  // Temporary users for frontend testing.
  // We will connect this to Django later.
  const [users] = useState([
    {
      id: 1,
      name: "Aman Sharma",
      email: "aman@example.com",
      department: "IT",
      location: "Chandigarh",
      jobLevel: "Entry"
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@example.com",
      department: "HR",
      location: "Delhi",
      jobLevel: "Mid"
    },
    {
      id: 3,
      name: "Rahul Verma",
      email: "rahul@example.com",
      department: "Finance",
      location: "Mohali",
      jobLevel: "Senior"
    },
    {
      id: 4,
      name: "Neha Kapoor",
      email: "neha@example.com",
      department: "IT",
      location: "Mohali",
      jobLevel: "Mid"
    }
  ]);

  const [filters, setFilters] = useState({
    department: "",
    location: "",
    jobLevel: ""
  });

  const [selectedUsers, setSelectedUsers] = useState(
    data.targets || []
  );

  const [sampling, setSampling] = useState({
    method: "all",
    size: users.length
  });

  const [testGroup, setTestGroup] = useState({
    enabled: false
  });

  const filteredUsers = useMemo(() => {

    return users.filter((user) => {

      const departmentMatch =
        !filters.department ||
        user.department === filters.department;

      const locationMatch =
        !filters.location ||
        user.location === filters.location;

      const jobLevelMatch =
        !filters.jobLevel ||
        user.jobLevel === filters.jobLevel;

      return (
        departmentMatch &&
        locationMatch &&
        jobLevelMatch
      );

    });

  }, [users, filters]);

  const handleUserToggle = (user) => {

    setSelectedUsers((current) => {

      const exists = current.some(
        (item) => item.id === user.id
      );

      if (exists) {
        return current.filter(
          (item) => item.id !== user.id
        );
      }

      return [...current, user];
    });

  };

  const handleNext = () => {

    if (selectedUsers.length === 0) {
      alert("Please select at least one target.");
      return;
    }

    updateData({
      targets: selectedUsers,
      sampling: sampling,
      testGroup: testGroup
    });

    nextStep();
  };

  return (
    <div className="target-selection-page">

      <div className="wizard-heading">

        <h2>Select Campaign Targets</h2>

        <p>
          Choose the users who will participate
          in this security-awareness simulation.
        </p>

      </div>

      <div className="target-layout">

        <div className="target-sidebar">

          <FilterPanel
            onFilterChange={setFilters}
          />

          <SamplingOptions
            totalUsers={filteredUsers.length}
            onSampleChange={setSampling}
          />

          <TestGroupSelector
            onTestGroupChange={setTestGroup}
          />

        </div>

        <div className="target-main">

          <UserList
            users={filteredUsers}
            selectedUsers={selectedUsers}
            onUserToggle={handleUserToggle}
          />

          <div className="selected-summary">

            <strong>
              {selectedUsers.length}
            </strong>

            <span>
              target{selectedUsers.length !== 1 ? "s" : ""}
              {" "}selected
            </span>

          </div>

        </div>

      </div>

      <div className="wizard-actions">

        <button onClick={prevStep}>
          ← Back
        </button>

        <button
          className="next-button"
          onClick={handleNext}
          disabled={selectedUsers.length === 0}
        >
          Continue →
        </button>

      </div>

    </div>
  );
};

export default Step2_TargetSelection;