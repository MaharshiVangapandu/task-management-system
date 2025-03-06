import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTasks, deleteTask } from '../Services/TaskService';

const ListTaskComponents = () => {
  const [tasks, setTasks] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = () => {
    getAllTasks()
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addNewTask = () => {
    navigator('/add-task');
  };

  const updateTask = (id) => {
    navigator(`/update-task/${id}`);
  };

  const removeTask = (id) => {
    deleteTask(id)
      .then(() => {
        loadTasks();
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">List of Tasks</h2>
      <button className="btn btn-primary mb-2" onClick={addNewTask}>Add Task</button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>
                <button className="btn btn-info me-2" onClick={() => updateTask(task.id)}>Update</button>
                <button className="btn btn-danger" onClick={() => removeTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary mt-3" onClick={() => navigator('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default ListTaskComponents;