import React, { useState } from "react";

import Card1 from "../UI/Card1";
import Button1 from "../UI/Button1";
import ErrorModal1 from "../UI/ErrorModal1";

import classes from "./AddUser.module.css";

const AddUser1 = (props) => {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if ( enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
        setError({
            title: 'Invaild input',
            message: 'Please enter a vaild name and age (non-empty values)'
        });
        return;
    }

    if ( +enteredAge < 1) {
        setError( {
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0)'
        });
        return;
    }

    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
       {error &&  <ErrorModal1 title={error.title} message={error.message} onConfirm={errorHandler}/> }
      <Card1 className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUserName}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
            <Button1 type="submit">Add User</Button1>
        </form>
      </Card1>
    </div>
  );
};

export default AddUser1;
