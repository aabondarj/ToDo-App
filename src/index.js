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
      {liClass: '', divClass: 'view', description: 'Completed task', created: 'created 17 seconds ago', id: 1},
      {liClass: 'editing', divClass: 'view', description: 'Editing task', created: 'created 5 minutes ago', id: 2},
      {liClass: '', divClass: 'view', description: 'Active task', created: 'created 5 minutes ago', id: 3}
    ]
  };

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
    const newItem = {
      liClass: '', 
      divClass: 'view', 
      description: text, 
      created: 'created 17 seconds ago', 
      id: this.maxId++
    }

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
  
  render() {
    return(
      <section className="todoapp">
        <header className="header">
         <AppHeader />
         <NewTaskForm />
        </header>
        <section className='main'>
          <TaskList 
          todos = {this.state.todoData}
          onDeleted={this.deleteItem}/>
          <ItemAddForm onItemAdded={this.addItem}/>
          <Footer />
        </section>
      </section>
    );
  }
};

const root = createRoot(document.getElementById('app-body'))
root.render(<App/>);