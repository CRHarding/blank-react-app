import React from "react";

export default function User({ users }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <h2>{user.firstName}</h2>
            <h2>{user.lastName}</h2>
            <p>{user.email}</p>
            <p>{user.password}</p>
          </div>
        );
      })}
    </div>
  );
}