import AssignmentCard from '../components/AssignmentCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { assignmentItems } from '../data/assignments.js'

export default function Assignments() {
  return (
    <section className="page-section">
      <SectionHeader eyebrow="Belangrijkste pagina" title="Uitgewerkte opdrachten" text="Alle opdrachten zijn data-gedreven. Pas de inhoud aan in src/data/assignments.js." />
      <nav className="toc">{assignmentItems.map((assignment) => <a key={assignment.id} href={`#${assignment.id}`}>{assignment.opdrachtNummer} {assignment.titel}</a>)}</nav>
      <div className="assignment-list">{assignmentItems.map((assignment) => <AssignmentCard key={assignment.id} assignment={assignment} />)}</div>
    </section>
  )
}
