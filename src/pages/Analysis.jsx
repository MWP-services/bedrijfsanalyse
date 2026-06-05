import AnalysisCard from '../components/AnalysisCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { analysisChapters } from '../data/analysis.js'

export default function Analysis() {
  return (
    <section className="page-section">
      <SectionHeader eyebrow="Hoofdstukken" title="Analyse" text="Een overzicht van alle analyseonderdelen. Werk de volledige opdrachten verder uit op de opdrachtenpagina." />
      <div className="card-grid">{analysisChapters.map((chapter) => <AnalysisCard key={chapter.title} {...chapter} />)}</div>
    </section>
  )
}
