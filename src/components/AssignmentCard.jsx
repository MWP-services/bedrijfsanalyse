import { CheckCircle, Eye, Leaf, ShieldCheck, Target, TrendingUp, Users } from 'lucide-react'
import ImageBlock from './ImageBlock.jsx'
import TableBlock from './TableBlock.jsx'

const icons = {
  CheckCircle,
  Eye,
  Leaf,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
}

function TextCards({ title, cards }) {
  return (
    <section className="report-section">
      <h3>{title}</h3>
      <div className="report-card-grid">
        {cards.map((card) => (
          <article className="report-card" key={card.title}>
            <h4>{card.title}</h4>
            {card.text && <p>{card.text}</p>}
            {card.items && <ul>{card.items.map((item) => <li key={item}>{item}</li>)}</ul>}
          </article>
        ))}
      </div>
    </section>
  )
}

function IconCards({ title, cards }) {
  return (
    <section className="report-section">
      <h3>{title}</h3>
      <div className="icon-card-grid">
        {cards.map((card) => {
          const Icon = icons[card.icon] || CheckCircle
          return (
            <article className="icon-card" key={card.title}>
              <span className="icon-badge"><Icon size={22} /></span>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Checklist({ title, items, assessment }) {
  return (
    <section className="report-section">
      <h3>{title}</h3>
      <div className="checklist-card">
        <ul>
          {items.map((item) => (
            <li key={item}><CheckCircle size={18} /> {item}</li>
          ))}
        </ul>
        {assessment && <p>{assessment}</p>}
      </div>
    </section>
  )
}

function Matrix({ title, cells }) {
  return (
    <section className="report-section">
      <h3>{title}</h3>
      <div className="matrix-grid">
        {cells.map((cell) => (
          <article className="matrix-card" key={cell.title}>
            <h4>{cell.title}</h4>
            <ul>{cell.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function AssessmentBlock({ text }) {
  return <div className="assessment-block">{text}</div>
}

function renderSection(section) {
  if (section.type === 'cards') return <TextCards key={section.title} {...section} />
  if (section.type === 'iconCards') return <IconCards key={section.title} {...section} />
  if (section.type === 'table') return (
    <section className="report-section" key={section.title}>
      <TableBlock title={section.title} columns={section.columns} rows={section.rows} />
      {section.assessment && <AssessmentBlock text={section.assessment} />}
    </section>
  )
  if (section.type === 'checklist') return <Checklist key={section.title} {...section} />
  if (section.type === 'matrix') return <Matrix key={section.title} {...section} />
  if (section.type === 'conclusion') return <div className="report-conclusion" key={section.title}><h3>{section.title}</h3><p>{section.text}</p></div>
  return null
}

export default function AssignmentCard({ assignment }) {
  return (
    <details className="assignment-card" id={assignment.id}>
      <summary>
        <span>{assignment.opdrachtNummer}</span>
        <strong>{assignment.titel}</strong>
      </summary>
      <div className="assignment-content">
        {assignment.subtitel && <p className="assignment-subtitle">{assignment.subtitel}</p>}
        <p className="lead">{assignment.korteIntro}</p>
        {assignment.volledigeTekst && <p>{assignment.volledigeTekst}</p>}
        {assignment.sections?.map(renderSection)}
        <div className="placeholder-grid">
          {(assignment.afbeeldingen || []).map((image) => <ImageBlock key={image.title} {...image} />)}
        </div>
        {(assignment.tabellen || []).map((table) => <TableBlock key={table.title} {...table} />)}
        <div className="source-box">
          <strong>Bronnen</strong>
          <ul>{assignment.bronnen.map((source) => <li key={source}>{source}</li>)}</ul>
        </div>
        <div className="conclusion-box">
          <strong>Conclusie</strong>
          <p>{assignment.conclusie}</p>
        </div>
      </div>
    </details>
  )
}
