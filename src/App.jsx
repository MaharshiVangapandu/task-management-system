import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeaderComponent } from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomePageComponent from './components/HomePageComponent.jsx';
import ListTaskComponents from './components/ListTaskComponents';
import TaskComponent from './components/TaskComponent';
import DeleteTaskComponent from './components/DeleteTaskComponent';
import GetTaskByIdComponent from './components/GetTaskByIdComponent';
import UpdateTaskComponent from './components/UpdateTaskComponent';
import './App.css';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/add-task" element={<TaskComponent />} />
          <Route path="/get-all-tasks" element={<ListTaskComponents />} />
          <Route path="/get-task-by-id" element={<GetTaskByIdComponent />} />
          <Route path="/update-task" element={<UpdateTaskComponent />} />
          <Route path="/delete-task" element={<DeleteTaskComponent />} />
          <Route path="/update-task/:id" element={<TaskComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;