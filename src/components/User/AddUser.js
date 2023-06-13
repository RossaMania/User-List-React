import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();

  const ageInputRef = useRef();

  const [error, setError] = useState();

  const handleAddUser = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    console.log(ageInputRef.current.value);

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || +enteredUserAge <= 17) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age.",
      });
      return;
    }

    if (+enteredUserAge < 18) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid age over 18!",
      });
    }

    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const handleError = (props) => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={handleError}
        />
      )}
      <Card className={classes.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (In Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit" onClick={handleAddUser}>
            Add User!
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
