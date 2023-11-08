import React from "react";
import Task from '../task'
import './task-list.css'

const TaskList = ({todos, onDeleted, onToggleDone}) => {
  const elements = todos.map((item) => {
    const {liClass, id, ...itemProps} = item

    let listItem = (
      <li key={id} className={liClass}>
        <Task {...itemProps}
        onDeleted={()=> onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}/>
      </li>
    );

    if (liClass === 'editing') {
      listItem = (
        <li key={id} className={liClass}>
          <Task 
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}/>
          <input type="text" className="edit" value="Editing task"></input>
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