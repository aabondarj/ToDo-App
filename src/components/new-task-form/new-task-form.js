import React, {Component} from "react";
import './new-task-form.css'

export default class NewTaskForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  }

  render() {
    return (
      <form 
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}>
        <input 
          type="text" 
          className="new-todo"
          onChange={this.onLabelChange} 
          placeholder="What needs to be done?" 
          value={this.state.label}
          autoFocus>
        </input>
        <button
          className="btn btn-outline-secondary">
          Add Item
        </button>
      </form>
    );
  }
}

// const NewTaskForm = () => {
//   return (
//     <input className="new-todo" placeholder="What needs to be done?" autoFocus></input>
//   );
// }

// export default NewTaskForm;

/*
export default class NewTaskForm extends Component {

  render() {
    return (
      <form className="item-add-form">
      <input className="new-todo" placeholder="What needs to be done?" autoFocus></input>
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.onItemAdded('GGG')}>
          Add Item
        </button>
      </form>
    );
  }
}
*/