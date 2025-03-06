import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTask, getTaskById, updateTask, deleteTask } from '../Services/TaskService';

const TaskComponent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getTaskById(id)
        .then((response) => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setStatus(response.data.status);
        })
        .catch((error) => console.error('Error fetching task:', error));
    }
  }, [id]);

  const validateForm = () => {
    let tempErrors = {};
    if (!title) tempErrors.title = 'Title is required';
    if (!description) tempErrors.description = 'Description is required';
    if (!status) tempErrors.status = 'Status is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const saveTask = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const task = { title, description, status };

    if (id) {
      updateTask(id, task).then(() => navigator('/get-all-tasks'));
    } else {
      createTask(task).then(() => navigator('/get-all-tasks'));
    }
  };

  const removeTask = () => {
    if (id) {
      deleteTask(id).then(() => navigator('/get-all-tasks'));
    }
  };

  return (
    <div className="container mt-4">
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center">{id ? 'Update Task' : 'Add Task'}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Title</label>
                <input 
                  type="text" 
                  value={title} 
                  className="form-control" 
                  onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <small className="text-danger">{errors.title}</small>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Description</label>
                <input 
                  type="text" 
                  value={description} 
                  className="form-control" 
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description && <small className="text-danger">{errors.description}</small>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Status</label>
                <input 
                  type="text" 
                  value={status} 
                  className="form-control" 
                  onChange={(e) => setStatus(e.target.value)}
                />
                {errors.status && <small className="text-danger">{errors.status}</small>}
              </div>
              <button className="btn btn-success me-2" onClick={saveTask}>
                {id ? 'Update' : 'Submit'}
              </button>
              {id && (
                <button className="btn btn-danger" onClick={removeTask}>
                  Delete
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary mt-3" onClick={() => navigator('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default TaskComponent;