export default function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </div>
  )
}
