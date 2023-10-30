import React from "react";
import './new-task-form.css'

const NewTaskForm = () => {
  return (
    <input className="new-todo" placeholder="What needs to be done?" autofocus></input>
  );
}

export default NewTaskForm;