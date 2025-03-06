import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../Services/TaskService';

const DeleteTaskComponent = () => {
  const [taskId, setTaskId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleDeleteTask = async () => {
    if (!taskId) {
      setError('Please enter a task ID');
      return;
    }

    try {
      await deleteTask(taskId);
      navigate('/get-all-tasks');
    } catch (error) {
      setError('Failed to delete task');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Delete Task</h2>
      <div className="card col-md-6 offset-md-3">
        <div className="card-body">
          <div className="form-group mb-2">
            <label className="form-label">Task ID</label>
            <input
              type="text"
              className="form-control"
              value={taskId}
              onChange={(e) => setTaskId(e.target.value)}
              placeholder="Enter Task ID"
            />
          </div>
          <button className="btn btn-danger" onClick={handleDeleteTask}>
            Delete Task
          </button>
          {error && <div className="text-danger mt-2">{error}</div>}
        </div>
      </div>
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default DeleteTaskComponent;