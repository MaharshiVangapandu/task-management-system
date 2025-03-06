import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePageComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome to Task Management System</h2>
      <div className="d-flex flex-column align-items-center">
        <button
          className="btn btn-primary btn-lg mb-3 w-50"
          onClick={() => navigate('/add-task')}
        >
          Add Task
        </button> 
        <button
          className="btn btn-success btn-lg mb-3 w-50"
          onClick={() => navigate('/get-all-tasks')}
        >
          Get All Tasks
        </button>
        <button
          className="btn btn-info btn-lg mb-3 w-50"
          onClick={() => navigate('/get-task-by-id')}
        >
          Get Task By ID
        </button>
        <button
          className="btn btn-warning btn-lg mb-3 w-50"
          onClick={() => navigate('/update-task')}
        >
          Update Task
        </button>
        <button
          className="btn btn-danger btn-lg mb-3 w-50"
          onClick={() => navigate('/delete-task')}
        >
          Delete Task
        </button> 
      </div>
    </div>
  );
};

export default HomePageComponent;