import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

export const getTasks = () => axios.get(API_URL);

export const getTasksByStatus = (status) =>
  axios.get(`${API_URL}/status/${status}`);

export const createTask = (task) => axios.post(API_URL, task);

export const markComplete = (id) =>
  axios.put(`${API_URL}/${id}/complete`);

export const deleteTask = (id) =>
  axios.delete(`${API_URL}/${id}`);

export const updateTask = (id, task) =>
  axios.put(`${API_URL}/${id}`, task);

export const updateStatus = (id, status) =>
  axios.put(`${API_URL}/${id}/status?status=${status}`);