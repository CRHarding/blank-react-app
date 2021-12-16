import React from "react";

export default function Form({ user, change, submit, disabled, errors }) {
  const handleChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueAgain = "checkbox" === type ? checked : value;
    change(name, valueAgain);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          Check, if you agree to Terms of Service
          <input
            type="checkbox"
            name="termsOfService"
            checked={user.termsOfService}
            onChange={handleChange}
          />
        </label>
        <button disabled={disabled}>Submit</button>
      </form>
      <div className="errors">
        <div>{errors.firstName}</div>
        <div>{errors.lastName}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
      </div>
    </div>
  );
}