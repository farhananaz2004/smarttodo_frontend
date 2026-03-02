import React, { useEffect, useState } from "react";
import {
  getTasks,
  getTasksByStatus,
  deleteTask,
  updateStatus
} from "../service/taskService";

import FilterButtons from "./FilterButtons";
import EditTask from "./EditTask";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchAll = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  const filterByStatus = async (status) => {
    const response = await getTasksByStatus(status);
    setTasks(response.data);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchAll();
  };

  const handleToggleStatus = async (task) => {
    const newStatus =
      task.status === "COMPLETED" ? "PENDING" : "COMPLETED";

    await updateStatus(task.id, newStatus);
    fetchAll();
  };

  return (
    <div>
      <FilterButtons
        onAll={fetchAll}
        onPending={() => filterByStatus("PENDING")}
        onCompleted={() => filterByStatus("COMPLETED")}
      />

      {tasks.map((task) => (
        <div className="card" key={task.id}>
          <h3 className={task.status === "COMPLETED" ? "completed" : ""}>
            {task.title}
          </h3>

          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>

          <button onClick={() => handleToggleStatus(task)}>
            {task.status === "COMPLETED"
              ? "Mark Pending"
              : "Mark Complete"}
          </button>

          <button onClick={() => handleDelete(task.id)}>
            Delete
          </button>

          <button onClick={() => setEditingTask(task)}>
            Edit
          </button>
        </div>
      ))}

      {editingTask && (
        <EditTask
          task={editingTask}
          refresh={() => {
            setEditingTask(null);
            fetchAll();
          }}
        />
      )}
    </div>
  );
}

export default TaskList;