import React from "react";
import Task from '../task'
import './task-list.css'

const TaskList = ({todos}) => {
  const elements = todos.map((item) => {
    const {liClass, ...itemProps} = item

    let listItem = (
      <li className={liClass}>
        <Task {...itemProps}/>
      </li>
    );

    if (liClass == 'editing') {
      listItem = (
        <li className={liClass}>
          <Task {...itemProps}/>
          <input type="text" class="edit" value="Editing task"></input>
        </li>
      );
    }
    return listItem;
  });


  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
  
}

export default TaskList;