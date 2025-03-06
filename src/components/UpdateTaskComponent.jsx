import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTaskById, updateTask } from '../Services/TaskService';

const UpdateTaskComponent = () => {
  const [taskId, setTaskId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setTaskId(id);
      fetchTask(id);
    }
  }, [id]);

  const fetchTask = async (id) => {
    try {
      const response = await getTaskById(id);
      const task = response.data;
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
    } catch (error) {
      setError('Task not found');
    }
  };

  const handleUpdateTask = async () => {
    if (!taskId || !title || !description || !status) {
      setError('All fields are required');
      return;
    }

    try {
      const task = { title, description, status };
      await updateTask(taskId, task);
      navigate('/get-all-tasks');
    } catch (error) {
      setError('Failed to update task');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Update Task</h2>
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
          <div className="form-group mb-2">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
            />
          </div>
          <div className="form-group mb-2">
            <label className="form-label">Status</label>
            <input
              type="text"
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Enter Status"
            />
          </div>
          <button className="btn btn-success" onClick={handleUpdateTask}>
            Update Task
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

export default UpdateTaskComponent;