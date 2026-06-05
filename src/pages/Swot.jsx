import SectionHeader from '../components/SectionHeader.jsx'

const swot = [
  ['Strengths', 'Sterktes van KPN, zoals netwerkpositie, betrouwbaarheid en sterke aanwezigheid in Nederland.'],
  ['Weaknesses', 'Zwaktes of interne aandachtspunten van KPN, zoals hoge investeringsdruk of afhankelijkheid van de Nederlandse markt.'],
  ['Opportunities', 'Kansen voor KPN vanuit glasvezel, 5G, cybersecurity, zakelijke diensten en digitalisering.'],
  ['Threats', 'Bedreigingen voor KPN vanuit concurrentie, regulering, cyberrisico, technologie en economische druk.'],
]

export default function Swot() {
  return (
    <section className="page-section">
      <SectionHeader eyebrow="KPN strategisch overzicht" title="SWOT-analyse KPN" text="Werk ieder kwadrant uit met feitelijke argumenten, bronnen en een duidelijke conclusie over KPN." />
      <div className="swot-grid">{swot.map(([title, text]) => <article key={title}><h2>{title}</h2><ul><li>{text}</li><li>Vul extra KPN-punten toe.</li></ul></article>)}</div>
      <article className="wide-card"><h2>Onderbouwing, bronnen en conclusie</h2><p>Leg hier uit welke SWOT-factoren voor KPN het zwaarst wegen en wat dit betekent voor strategie en beleggingsadvies.</p></article>
    </section>
  )
}
