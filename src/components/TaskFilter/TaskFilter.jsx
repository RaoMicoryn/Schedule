import "./TaskFilter.css";

const FILTERS = ["All", "Completed", "Pending"];

export default function TaskFilter({ current, onChange }) {
  return (
    <div>
      <p className="section-label">Filter Tasks</p>
      <div className="filter-group">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${current === f ? "filter-btn--active" : ""}`}
            onClick={() => onChange(f)}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}
