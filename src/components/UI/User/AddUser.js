import React from "react";

import Card from "../Card";
import Button from "../Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const handleAddUser = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleAddUser}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (In Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User!</Button>
      </form>
    </Card>
  );
};

export default AddUser;
