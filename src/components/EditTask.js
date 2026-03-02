import React, { useState } from "react";
import { updateTask } from "../service/taskService"; // or taskService (match your file)

function EditTask({ task, refresh }) {
  const [form, setForm] = useState(task);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(task.id, form);
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} />
      <input name="description" value={form.description} onChange={handleChange} />

      <select name="priority" value={form.priority} onChange={handleChange}>
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>

      <button type="submit">Save</button>
    </form>
  );
}

export default EditTask;