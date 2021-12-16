import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "./validation/formSchema";
import MemberForm from "./components/MemberForm";
import Member from "./components/Member";
const initialFormValues = {
  username: "",
  email: "",
  role: "",
  experience: "",
};

const initialFormErrors = {
  username: "",
  email: "",
  role: "",
  experience: "",
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users`)
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => console.log(error, `There was an error fam 😭💔`))
      .finally(() => setFormValues(initialFormValues));
  };

  const postNewUser = (newUser) => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
      })
      .catch((err) => {
        console.log(error, `There was an error`);
      })
      .finally(() => setFormValues(initialFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      experience: formValues.experience,
    };
    postNewUser(newFriend);
  };
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div>
      <header>BJJ Competitors</header>
      <MemberForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disable={disabled}
        errors={formErrors}
      />
      {users.map((user) => {
        return <Member key={user.id} details={user} />;
      })}
    </div>
  );
}

export default App;
