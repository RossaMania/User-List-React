import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");

  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const handleAddUser = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      +enteredAge <= 17
    ) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age."
      })
      return;
    }

    if (+enteredAge < 18) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid age over 18!"
      })
    }

    props.onAddUser(enteredUsername, enteredAge);
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


  const handleError = (props) => {
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={handleError} />}
      <Card className={classes.input}>
        <form>
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
    </div>
  );
};

export default AddUser;
