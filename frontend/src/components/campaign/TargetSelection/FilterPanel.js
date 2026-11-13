import React, { useState } from "react";

const FilterPanel = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    department: "",
    location: "",
    jobLevel: ""
  });

  const handleFilterChange = (key, value) => {
    const newFilters = {
      ...filters,
      [key]: value
    };

    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="filter-panel">

      <h3>Filter Users</h3>

      <div className="filter-group">
        <label>Department</label>

        <select
          value={filters.department}
          onChange={(e) =>
            handleFilterChange("department", e.target.value)
          }
        >
          <option value="">All Departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Location</label>

        <select
          value={filters.location}
          onChange={(e) =>
            handleFilterChange("location", e.target.value)
          }
        >
          <option value="">All Locations</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Delhi">Delhi</option>
          <option value="Mohali">Mohali</option>
          <option value="Mumbai">Mumbai</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Job Level</label>

        <select
          value={filters.jobLevel}
          onChange={(e) =>
            handleFilterChange("jobLevel", e.target.value)
          }
        >
          <option value="">All Levels</option>
          <option value="Entry">Entry Level</option>
          <option value="Mid">Mid Level</option>
          <option value="Senior">Senior Level</option>
        </select>
      </div>

    </div>
  );
};

export default FilterPanel;