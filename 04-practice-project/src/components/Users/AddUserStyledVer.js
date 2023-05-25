import React, { useState } from "react";
import styled from "styled-components";
import ButtonStyledVer from "../UI/ButtonStyledVer";
import CardStyldVer from "../UI/CardStyldVer";
import ErrorModalStyledVer from "../UI/ErrorModalStyledVer";
const AddUser = styled.div`
  .input {
    margin: 2rem auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
  }

  .input label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .input input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  .input input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

const AddUser_styled_ver = ({onAddUser}) => {
  const [form, setForm] = useState({
    username: "",
    age: "",
  });
  const [error, setError] = useState('');

  const { username, age } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name] : e.target.value
    };
    setForm(nextForm);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if( username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invaild input',
        message: 'Please enter a valid name and age (non-empty values).'
    });
    return;
    }

    if (+age < 1) {
      setError({
          title: 'Invaild age',
          message: 'Please enter a valid age (> 0).'
      });
      return;
  }
  onAddUser(username,age);
  setForm('');
  }

  const errorHandler = () => {
    setError(null);
  }
  return (
    <AddUser>
      { error && <ErrorModalStyledVer title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <CardStyldVer className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={onChange}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            name="age"
            value={age}
            onChange={onChange}
          ></input>
          <ButtonStyledVer type="submit">Add User</ButtonStyledVer>
        </form>
      </CardStyldVer>
    </AddUser>
  );
};

export default AddUser_styled_ver;
