import React, { useState } from "react";

import Card from "../src/components/UI/Card";
import Button from "../src/components/UI/Button";
import classes from "./AddUser.module.css";
import { log } from "console";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");

  const [enteredAge, setEnteredAge] = useState("");

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setEnteredUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    console.log(event.target.value);
    setEnteredUsername(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleAddUser}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={handleUsernameChange} />
        <label htmlFor="age">Age (In Years)</label>
        <input id="age" type="number" onChange={handleAgeChange}/>
        <Button type="submit">Add User!</Button>
      </form>
    </Card>
  );
};

export default AddUser;
