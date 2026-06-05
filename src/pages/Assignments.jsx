import AssignmentCard from '../components/AssignmentCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { assignmentItems } from '../data/assignments.js'

export default function Assignments() {
  return (
    <section className="page-section">
      <div className="assignments-hero">
        <SectionHeader eyebrow="Bedrijfsanalyse KPN" title="Uitgewerkte opdrachten" text="Bedrijfsanalyse KPN" />
        <p>Alle opdrachten zijn data-gedreven opgebouwd met rapportcards, tabellen, KPI-blokken, visuele modellen en bronvermelding. Pas de inhoud aan in src/data/assignments.js.</p>
      </div>
      <nav className="toc">{assignmentItems.map((assignment) => <a key={assignment.id} href={`#${assignment.id}`}>{assignment.opdrachtNummer} {assignment.titel}</a>)}</nav>
      <div className="assignment-list">{assignmentItems.map((assignment) => <AssignmentCard key={assignment.id} assignment={assignment} />)}</div>
    </section>
  )
}
