import React from "react";

export default function MemberForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Add a member</h2>
        <button disabled={disabled} data-cy="submitButton">
          Submit
        </button>
        <div>
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.experience}</div>
        </div>
      </div>

      <div>
        <h4>General Information</h4>
        <label>
          Username
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <label>
          Role
          <select
            onChange={onChange}
            value={values.role}
            name="role"
            data-cy="role"
          >
            <option value="">- Select an option -</option>
            <option value="White Belt">White Belt</option>
            <option value="Blue Belt">Blue Belt</option>
            <option value="Purple Belt">Purple Belt</option>
            <option value="Brown Belt">Brown Belt</option>
            <option value="Black Belt">Black Belt</option>
          </select>
        </label>

        <label>
          Experience
          <select
            onChange={onChange}
            value={values.experience}
            name="experience"
          >
            <option value="">- Select an option -</option>
            <option value="Beginner">Beginner</option>
            <option value="Advanced">Advanced</option>
            <option value="Master">Master</option>
          </select>
        </label>
      </div>
    </form>
  );
}
