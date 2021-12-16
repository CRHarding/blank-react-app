import React from "react";

function Member({ details }) {
  console.log(details);
  if (!details) {
    return <h3>Working fetching data...</h3>;
  }

  return (
    <div>
      {/* {!details.first_name ? (
        <p>First Name: {details.username}</p>
      ) : (
        <p>First Name: {details.first_name}</p>
      )} */}
      {!details.last_name ? "" : <p>Last Name: {details.last_name}</p>}
      {!details.role ? "" : <p>Role: {details.role}</p>}
      <p>Email: {details.email}</p>
      {!details.experience ? "" : <p>Experience: {details.experience}</p>}
    </div>
  );
}
export default Member;
