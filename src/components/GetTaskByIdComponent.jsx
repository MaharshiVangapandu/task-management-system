import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTaskById } from '../Services/TaskService';

const GetTaskByIdComponent = () => {
  const [taskId, setTaskId] = useState('');
  const [task, setTask] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFetchTask = async () => {
    if (!taskId) {
      setError('Please enter a task ID');
      return;
    }

    try {
      const response = await getTaskById(taskId);
      setTask(response.data);
      setError('');
    } catch (error) {
      setError('Task not found');
      setTask(null);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Get Task By ID</h2>
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
          <button className="btn btn-success" onClick={handleFetchTask}>
            Fetch Task
          </button>
          {error && <div className="text-danger mt-2">{error}</div>}
          {task && (
            <div className="mt-3">
              <h4>Task Details</h4>
              <p><strong>Title:</strong> {task.title}</p>
              <p><strong>Description:</strong> {task.description}</p>
              <p><strong>Status:</strong> {task.status}</p>
            </div>
          )}
        </div>
      </div>
      <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>
        Back to Home
      </button> 
    </div>
  );
};

export default GetTaskByIdComponent;