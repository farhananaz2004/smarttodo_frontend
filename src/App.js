import "./App.css";
import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [reload, setReload] = useState(false);

  const refresh = () => {
    setReload(!reload);
  };

  return (
    <div className="container">
      <h1>Smart To Do</h1>
      <TaskForm refresh={refresh} />
      <TaskList key={reload} />
    </div>
  );
}

export default App;