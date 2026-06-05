import SectionHeader from '../components/SectionHeader.jsx'

const blocks = [
  ['Wie?', 'KPN is een beursgenoteerde Nederlandse telecomaanbieder en digitale infrastructuurspeler.'],
  ['Wat?', 'KPN levert vaste en mobiele telecomdiensten, internet, zakelijke connectiviteit, cloud- en beveiligingsdiensten.'],
  ['Waar?', 'KPN richt zich vooral op Nederland, met consumenten, bedrijven en publieke organisaties als belangrijke klantgroepen.'],
  ['Waarom?', 'KPN wil mensen, bedrijven en organisaties veilig en betrouwbaar verbinden in een steeds digitalere samenleving.'],
  ['Wanneer?', 'De analyse richt zich op het schooljaar 2025-2026 en gebruikt actuele KPN-bronnen zodra deze worden toegevoegd.'],
  ['Hoe?', 'KPN investeert in glasvezel, 5G, cybersecurity, klantgerichte dienstverlening en duurzame bedrijfsvoering.'],
]

export default function Company() {
  return (
    <section className="page-section">
      <SectionHeader eyebrow="KPN-profiel" title="Over KPN" text="Deze pagina vormt het bedrijfsprofiel van KPN binnen de integrale bedrijfsanalyse." />
      <div className="info-grid">
        {blocks.map(([title, text]) => (
          <article className="info-card" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="split-section">
        <article><h2>Missie, visie en strategie</h2><p>KPN staat centraal als digitale verbinder van Nederland. De strategie wordt beoordeeld op betrouwbaarheid, innovatie, veiligheid, klantgerichtheid en duurzaamheid.</p></article>
        <article><h2>Kernactiviteiten</h2><p>De kernactiviteiten liggen bij vaste en mobiele netwerken, glasvezel, internet, zakelijke connectiviteit, digitale veiligheid en aanvullende IT-diensten.</p></article>
      </div>
      <article className="wide-card">
        <h2>SDGs en duurzaamheid</h2>
        <p>Voor KPN worden duurzaamheid, energieverbruik, digitale inclusie, privacy en veilige digitale infrastructuur gekoppeld aan relevante SDGs.</p>
      </article>
    </section>
  )
}
