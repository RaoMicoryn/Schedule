import { useState } from "react";
import "./TaskForm.css";

const CATEGORIES = ["Study", "Work", "Health", "Personal", "Other"];

const EMPTY_FORM = { title: "", category: "", priority: "", deadline: "" };

export default function TaskForm({ onAddTask }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.title.trim())  e.title    = "Title is required";
    if (!form.category)      e.category = "Category must be selected";
    if (!form.priority)      e.priority = "Priority must be chosen";
    if (!form.deadline)      e.deadline = "Deadline is required";
    return e;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    onAddTask(form);
    setForm(EMPTY_FORM);
    setErrors({});
  };

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="task-form">
      <p className="section-label">Add New Task</p>

      <div className="field-group">
        <label className="field-label">Task Title</label>
        <input className="field-input" type="text" placeholder="e.g. Study React" value={form.title} onChange={set("title")} />
        {errors.title && <span className="field-error">{errors.title}</span>}
      </div>

      <div className="field-group">
        <label className="field-label">Category</label>
        <select className="field-input" value={form.category} onChange={set("category")}>
          <option value="">Select category...</option>
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.category && <span className="field-error">{errors.category}</span>}
      </div>

      <div className="field-group">
        <label className="field-label">Priority</label>
        {["Low", "Medium", "High"].map((p) => (
          <label key={p} className="radio-label">
            <input type="radio" name="priority" value={p} checked={form.priority === p} onChange={set("priority")} />
            {p}
          </label>
        ))}
        {errors.priority && <span className="field-error">{errors.priority}</span>}
      </div>

      <div className="field-group">
        <label className="field-label">Deadline</label>
        <input className="field-input" type="date" value={form.deadline} onChange={set("deadline")} />
        {errors.deadline && <span className="field-error">{errors.deadline}</span>}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>+ Add Task</button>
    </div>
  );
}
