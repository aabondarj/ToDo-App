import React from "react";
import './task.css'

const Task = ({divClass, description, created}) => {
  return (
    <div className={divClass}>
      <input className="toggle" type="checkbox"></input>
      <label>
        <span className="description">{description}</span>
        <span className="created">{created}</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  );
};

export default Task;