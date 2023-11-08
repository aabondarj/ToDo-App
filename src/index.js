import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client'
import './index.css'

import AppHeader from './components/app-header';
import NewTaskForm from './components/new-task-form';
import TaskList from "./components/task-list";
import Footer from './components/footer';
import ItemAddForm from './components/item-add-form';

class App extends Component {

  maxId = 100;
  state ={
    todoData: [
      this.createTodoItem('Completed task'),
      this.createTodoItem('Editing task', 'editing'),
      this.createTodoItem('Active task')
    ]
  };

  createTodoItem(description, liClass='') {
    return {
      liClass, 
      divClass: 'view', 
      description,
      done: false, 
      created: 'created 17 seconds ago', 
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {

      const idx = todoData.findIndex((el) => el.id === id)
      // todoData.splice(idx, 1)
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    //generate id ?
    const newItem = this.createTodoItem(text)

    //add element in array ?
    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });
  };

  toogleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)

      // 1. update object
      const oldItem = arr[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      // 2. construct new array
      return [
        ...arr.slice(0,idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
  }

  onToggleDone = (id) => {
    this.setState(({todoData}) => {

      return {
        todoData: this.toogleProperty(todoData, id, 'done')
      };

    });
  };
  
  render() {

    const {todoData} = this.state;

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return(
      <section className="todoapp">
        <header className="header">
         <AppHeader />
         <NewTaskForm onItemAdded={this.addItem}/>
        </header>
        <section className='main'>
          <TaskList 
          todos = {todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}/>
          {/* <ItemAddForm onItemAdded={this.addItem}/> */}
          <Footer done={todoCount}/>
        </section>
      </section>
    );
  }
};

const root = createRoot(document.getElementById('app-body'))
root.render(<App/>);