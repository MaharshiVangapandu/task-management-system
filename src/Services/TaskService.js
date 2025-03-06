import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/tasks';

export const getAllTasks = () => axios.get(`${REST_API_BASE_URL}/getAllTasks`);
export const createTask = (task) => axios.post(`${REST_API_BASE_URL}/createTask`, task);
export const getTaskById = (id) => axios.get(`${REST_API_BASE_URL}/getTaskById/${id}`); 
export const updateTask = (id, task) => axios.put(`${REST_API_BASE_URL}/updateTask/${id}`, task); 
export const deleteTask = (id) => axios.delete(`${REST_API_BASE_URL}/deleteTask/${id}`);