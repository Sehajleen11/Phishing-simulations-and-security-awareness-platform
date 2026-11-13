import React from "react";

const UserList = ({
  users,
  selectedUsers,
  onUserToggle
}) => {

  return (
    <div className="user-list">

      <div className="user-list-header">
        <h3>Available Users</h3>

        <span>
          {selectedUsers.length} selected
        </span>
      </div>

      {users.length === 0 ? (
        <div className="no-users">
          No users match the selected filters.
        </div>
      ) : (
        <div className="users-container">

          {users.map((user) => {

            const isSelected = selectedUsers.some(
              (selected) => selected.id === user.id
            );

            return (
              <div
                key={user.id}
                className={`user-card ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => onUserToggle(user)}
              >

                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onUserToggle(user)}
                  onClick={(e) => e.stopPropagation()}
                />

                <div className="user-info">

                  <strong>
                    {user.name}
                  </strong>

                  <span>
                    {user.email}
                  </span>

                  <small>
                    {user.department} • {user.location}
                  </small>

                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
};

export default UserList;