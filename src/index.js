import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client'
import './index.css'

import AppHeader from './components/app-header';
import NewTaskForm from './components/new-task-form';
import TaskList from "./components/task-list";
import Footer from './components/footer';

const App = () => {
  const todoData = [
    {liClass: 'completed', divClass: 'view', description: 'Completed task', created: 'created 17 seconds ago'},
    {liClass: 'editing', divClass: 'view', description: 'Editing task', created: 'created 5 minutes ago'},
    {liClass: '', divClass: 'view', description: 'Active task', created: 'created 5 minutes ago'}
  ];
  
  return(
    <section class="todoapp">
      <header className="header">
       <AppHeader />
       <NewTaskForm />
      </header>
      <section className='main'>
        <TaskList todos = {todoData}/>
        <Footer />
      </section>
    </section>
  )
}

const root = createRoot(document.getElementById('app-body'))
root.render(<App/>);