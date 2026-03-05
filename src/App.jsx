import { useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import TaskStats from "./components/TaskStats/TaskStats";
import TaskFilter from "./components/TaskFilter/TaskFilter.jsx";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const completeTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "Completed") return t.completed;
    if (filter === "Pending") return !t.completed;
    return true;
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };

  return (
    <div className="app">
      <header className="app-header">
        <p className="app-header__subtitle">Week 1 — Preparation Midterm Project</p>
        <h1 className="app-header__title">Task Management<br />Dashboard</h1>
        <span className="app-header__badge">Medium Difficulty · 2 Days</span>
      </header>

      <main className="app-main">
        <aside className="app-sidebar">
          <TaskForm onAddTask={addTask} />
        </aside>
        <section className="app-content">
          <TaskStats stats={stats} />
          <TaskFilter current={filter} onChange={setFilter} />
          <TaskList tasks={filteredTasks} onComplete={completeTask} onDelete={deleteTask} />
        </section>
      </main>
    </div>
  );
}
