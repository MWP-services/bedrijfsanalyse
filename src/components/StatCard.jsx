export default function StatCard({ label, value, text }) {
  return (
    <div className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{text}</p>
    </div>
  )
}
