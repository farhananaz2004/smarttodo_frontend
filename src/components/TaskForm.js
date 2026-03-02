import React, { useState } from "react";
import { createTask } from "../service/taskService";

function TaskForm({ refresh }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "LOW",
    status: "PENDING",
    dueDate: ""
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(task);
    refresh();
    setTask({
      title: "",
      description: "",
      priority: "LOW",
      status: "PENDING",
      dueDate: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={task.title}
        onChange={handleChange}
        required
      />

      <input
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
      />

      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>

      <input
        type="datetime-local"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;