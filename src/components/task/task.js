import React, {Component} from "react";
import './task.css'

export default class Task extends Component {

  render() {
    const {
      divClass, description, created, 
      onDeleted, 
      onToggleDone,
      done} = this.props;

    let descriptionClassNames = "description"

    if(done) {
      descriptionClassNames += ' done'
    }

    return (
      <div className={divClass}>
        <input className="toggle" type="checkbox"></input>
        <label>
          <span 
            className={descriptionClassNames}
            onClick={onToggleDone}
            onToggleDone>
            {description}
          </span>
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button 
        className="icon icon-destroy" 
        onClick={onDeleted}>
        </button>
      </div>
    );
  };
}