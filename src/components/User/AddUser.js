import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");

  const [enteredAge, setEnteredAge] = useState("");

  const handleAddUser = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || +enteredAge.trim().length <= 17) {
      return;
    }

    if (+enteredAge < 1) {

    }

    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setEnteredUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    console.log(event.target.value);
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleAddUser}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={handleUsernameChange}
        />
        <label htmlFor="age">Age (In Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={handleAgeChange}
        />
        <Button type="submit" onClick={handleAddUser}>
          Add User!
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
