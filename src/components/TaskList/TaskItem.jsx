import "./TaskList.css";

const PRIORITY_STYLES = {
  Low:    { bg: "#d4f4e7", color: "#1a7a4a" },
  Medium: { bg: "#fff3cd", color: "#856404" },
  High:   { bg: "#fde8e8", color: "#c0392b" },
};

const PRIORITY_CLASS = {
  Low: "task-item--low",
  Medium: "task-item--medium",
  High: "task-item--high",
};

export default function TaskItem({ task, onComplete, onDelete }) {
  const ps = PRIORITY_STYLES[task.priority] || { bg: "#eee", color: "#333" };
  const priorityClass = PRIORITY_CLASS[task.priority] || "";

  return (
    <div className={`task-item ${priorityClass} ${task.completed ? "task-item--done" : ""}`}>
      <h3 className="task-item__title">
        {task.completed && <span className="task-item__check">✓ </span>}
        {task.title}
      </h3>
      <div className="task-item__tags">
        <span className="tag tag--category">{task.category}</span>
        <span className="tag" style={{ background: ps.bg, color: ps.color }}>● {task.priority}</span>
        <span className="tag tag--deadline">{task.deadline}</span>
      </div>
      <div className="task-item__actions">
        <button className={`action-btn ${task.completed ? "action-btn--undo" : "action-btn--complete"}`} onClick={onComplete}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button className="action-btn action-btn--delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
