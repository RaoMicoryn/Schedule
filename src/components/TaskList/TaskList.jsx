import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks, onComplete, onDelete }) {
  return (
    <div>
      <p className="section-label">Task List</p>
      {tasks.length === 0 ? (
        <p className="task-list__empty">No tasks to display.</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onComplete={() => onComplete(task.id)}
              onDelete={() => onDelete(task.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
