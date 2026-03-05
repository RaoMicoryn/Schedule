import "./TaskStats.css";

export default function TaskStats({ stats }) {
  return (
    <div>
      <p className="section-label">Statistics</p>
      <div className="stats-grid">
        <StatCard value={stats.total}     label="Total Tasks" color="#1a1a2e" />
        <StatCard value={stats.completed} label="Completed"   color="#1a7a4a" />
        <StatCard value={stats.pending}   label="Pending"     color="#c9a84c" />
      </div>
    </div>
  );
}

function StatCard({ value, label, color }) {
  return (
    <div className="stat-card">
      <span className="stat-value" style={{ color }}>{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
