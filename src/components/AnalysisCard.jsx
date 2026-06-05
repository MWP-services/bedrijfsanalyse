import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AnalysisCard({ icon: Icon, title, text, to = '/uitgewerkte-opdrachten' }) {
  return (
    <Link className="analysis-card" to={to}>
      <span className="icon-badge">{Icon && <Icon size={22} />}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="card-link">Bekijk onderdeel <ArrowRight size={16} /></span>
    </Link>
  )
}
