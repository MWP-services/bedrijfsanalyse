import { BarChart3, CircleDollarSign, Scale, ShieldCheck, TrendingDown, TrendingUp } from 'lucide-react'
import InteractiveInfographicCard from './InteractiveInfographicCard.jsx'
import TableBlock from './TableBlock.jsx'
import './ChapterThreeSolvability.css'

const solvabilityRows = [
  ['Eigen vermogen', 'EUR 5.120 mln', 'EUR 4.980 mln', 'EUR 1.340 mln', 'EUR 1.410 mln'],
  ['Totaal vermogen activa', 'EUR 21.350 mln', 'EUR 21.200 mln', 'EUR 16.750 mln', 'EUR 17.100 mln'],
  ['Solvabiliteitsratio', '23,98%', '23,49%', '8,00%', '8,25%'],
  ['Debt Ratio', '0,76', '0,77', '0,92', '0,92'],
]

const solvabilityItems = [
  {
    id: 'solvabiliteit',
    title: 'Solvabiliteit',
    description: 'De solvabiliteit laat zien welk deel van het totale vermogen is gefinancierd met eigen vermogen. Een hogere solvabiliteit betekent een grotere financiele buffer voor schuldeisers.',
    bullets: ['KPN recentste boekjaar: 23,98%', 'KPN jaar daarvoor: 23,49%', 'VodafoneZiggo recentste boekjaar: 8,00%', 'VodafoneZiggo jaar daarvoor: 8,25%'],
  },
  {
    id: 'debt-ratio',
    title: 'Debt Ratio',
    description: 'De Debt Ratio laat zien welk deel van de activa met vreemd vermogen is gefinancierd. Een hogere Debt Ratio betekent meer afhankelijkheid van schuldfinanciering.',
    bullets: ['KPN recentste boekjaar: 0,76', 'KPN jaar daarvoor: 0,77', 'VodafoneZiggo recentste boekjaar: 0,92', 'VodafoneZiggo jaar daarvoor: 0,92'],
  },
  {
    id: 'kpn',
    title: 'KPN',
    description: 'KPN heeft een stabiele solvabiliteit van ongeveer 24%. Voor een gevestigde telecomonderneming is dit redelijk tot goed, omdat de sector kapitaalintensief is.',
    bullets: ['Solvabiliteit stijgt licht van 23,49% naar 23,98%', 'Eigen vermogenspositie wordt versterkt', 'KPN blijft investeren in glasvezel en infrastructuur'],
  },
  {
    id: 'vodafoneziggo',
    title: 'VodafoneZiggo',
    description: 'VodafoneZiggo heeft een lagere solvabiliteit en een hogere Debt Ratio. Dit wijst op een risicovollere financieringsstructuur dan bij KPN.',
    bullets: ['Solvabiliteit rond 8%', 'Debt Ratio van 0,92', 'Sterke afhankelijkheid van vreemd vermogen'],
  },
  {
    id: 'vergelijking',
    title: 'Vergelijking',
    description: 'KPN staat op basis van deze kengetallen financieel sterker dan VodafoneZiggo. VodafoneZiggo kan sterker leunen op internationale moederbedrijven, terwijl KPN zelfstandig beursgenoteerd is.',
    bullets: ['KPN heeft meer eigen vermogen in verhouding tot totaal vermogen', 'VodafoneZiggo heeft een hogere schuldenstructuur', 'KPN moet vertrouwen behouden op aandelen- en obligatiemarkten'],
  },
  {
    id: 'conclusie',
    title: 'Conclusie',
    description: 'Beide ondernemingen laten een stabiele ontwikkeling zien, maar KPN heeft op basis van de solvabiliteitskengetallen een veiliger financieel profiel.',
    bullets: ['KPN heeft meer financiele flexibiliteit', 'VodafoneZiggo heeft een risicovoller profiel', 'Controleer definitieve cijfers met recente jaarverslagen'],
  },
]

function SolvabilityVisual({ items, activeId, interactive = false, onSelect }) {
  return (
    <div className="solvability-visual">
      <div className="solvability-visual-header">
        <span>Solvabiliteit</span>
        <h3>KPN versus VodafoneZiggo</h3>
      </div>
      <div className="solvability-metric-grid">
        {items.map((item) => {
          const icons = {
            solvabiliteit: ShieldCheck,
            'debt-ratio': Scale,
            kpn: TrendingUp,
            vodafoneziggo: TrendingDown,
            vergelijking: BarChart3,
            conclusie: CircleDollarSign,
          }
          const Icon = icons[item.id] || BarChart3
          const content = (
            <>
              <span className="icon-badge"><Icon size={20} /></span>
              <strong>{item.title}</strong>
              <small>{item.bullets[0]}</small>
            </>
          )

          if (!interactive) return <article className="solvability-metric-card" key={item.id}>{content}</article>

          return (
            <button className={activeId === item.id ? 'solvability-metric-card active' : 'solvability-metric-card'} key={item.id} type="button" onClick={() => onSelect(item)}>
              {content}
            </button>
          )
        })}
      </div>
      <div className="solvability-bars">
        <ProgressBar label="Solvabiliteit KPN" value="23,98%" percent={23.98} variant="kpn" />
        <ProgressBar label="Solvabiliteit VodafoneZiggo" value="8,00%" percent={8} variant="ziggo" />
        <ProgressBar label="Debt Ratio KPN" value="0,76" percent={76} variant="kpn" />
        <ProgressBar label="Debt Ratio VodafoneZiggo" value="0,92" percent={92} variant="ziggo" />
      </div>
    </div>
  )
}

function ProgressBar({ label, value, percent, variant }) {
  return (
    <div className="solvability-progress">
      <div><span>{label}</span><strong>{value}</strong></div>
      <div className="solvability-track"><span className={variant} style={{ width: `${percent}%` }} /></div>
    </div>
  )
}

export default function ChapterThreeSolvability() {
  return (
    <section className="solvability-section">
      <div className="solvability-header">
        <span className="eyebrow">Hoofdstuk 3 Financiele analyse</span>
        <h3>3.1 Solvabiliteitsanalyse: KPN versus VodafoneZiggo</h3>
        <p>In hoofdstuk 3 wordt de financiele positie van KPN beoordeeld. Daarbij wordt gekeken naar solvabiliteit, liquiditeit, rentabiliteit en activiteitskengetallen. In paragraaf 3.1 staat de solvabiliteit centraal.</p>
        <p>De solvabiliteit van een onderneming geeft aan in hoeverre een bedrijf in staat is om aan haar financiele verplichtingen op de lange termijn te voldoen. Het laat zien welk deel van het totale vermogen is gefinancierd met eigen vermogen en welk deel met vreemd vermogen. Voor investeerders en schuldeisers is dit een belangrijke indicator voor financieel risico.</p>
      </div>

      <article className="solvability-sector-card">
        <h4>Solvabiliteit in de telecomsector</h4>
        <p>De telecomsector is kapitaalintensief. Bedrijven zoals KPN en VodafoneZiggo moeten voortdurend investeren in infrastructuur, zoals glasvezelnetwerken, 5G-frequenties, datacenters en netwerkonderhoud. Daardoor is het in deze sector gebruikelijk dat een relatief groot deel van de activa met vreemd vermogen wordt gefinancierd. Tegelijkertijd zorgen maandelijkse abonnementen voor stabiele en voorspelbare kasstromen, waardoor banken en obligatiehouders vaak een hogere schuldenlast accepteren dan in meer conjunctuurgevoelige sectoren.</p>
      </article>

      <div className="formula-grid">
        <article>
          <span>Formule 1</span>
          <strong>Solvabiliteitsratio = Eigen Vermogen / Totaal Vermogen x 100%</strong>
          <p>Hoe hoger dit percentage, hoe groter de financiele buffer voor schuldeisers.</p>
        </article>
        <article>
          <span>Formule 2</span>
          <strong>Debt Ratio = Vreemd Vermogen / Totaal Vermogen</strong>
          <p>Dit kengetal geeft aan welk deel van de activa met geleend geld is gefinancierd.</p>
        </article>
      </div>

      <TableBlock
        title="Financieel overzicht KPN en VodafoneZiggo"
        columns={['Kengetal', 'KPN recentste boekjaar', 'KPN jaar daarvoor', 'VodafoneZiggo recentste boekjaar', 'VodafoneZiggo jaar daarvoor']}
        rows={solvabilityRows}
      />
      <p className="solvability-warning">Controleer de exacte jaarcijfers met het meest recente jaarverslag van KPN en VodafoneZiggo voordat deze tabel definitief wordt gebruikt.</p>

      <SolvabilityVisual items={solvabilityItems} />

      <div className="solvability-analysis-grid">
        <article>
          <h4>Beoordeling KPN</h4>
          <p>De solvabiliteit van KPN laat een stabiel en licht stijgend verloop zien, van 23,49% naar 23,98%. KPN weet haar eigen vermogenspositie te versterken ondanks dividenduitkeringen en investeringen in glasvezel en andere infrastructuur. Hoewel algemene normen vaak een solvabiliteit tussen 25% en 40% adviseren, is een ratio van circa 24% voor een gevestigde telecomonderneming als KPN als redelijk tot goed te beoordelen.</p>
        </article>
        <article>
          <h4>Vergelijking met VodafoneZiggo</h4>
          <p>VodafoneZiggo heeft een solvabiliteit van ongeveer 8% en een Debt Ratio van 0,92. Dit betekent dat de onderneming voor een zeer groot deel met vreemd vermogen is gefinancierd. Op basis van deze kengetallen heeft VodafoneZiggo een risicovollere financiele structuur dan KPN.</p>
        </article>
        <article>
          <h4>Verklaring verschil</h4>
          <p>Het verschil tussen KPN en VodafoneZiggo komt mede door de financiele structuur. VodafoneZiggo is een joint venture van Liberty Global en Vodafone Group. Hierdoor kan het bedrijf sterker leunen op de internationale moederbedrijven. KPN is zelfstandig beursgenoteerd en moet daardoor grotere financiele buffers aanhouden om vertrouwen te behouden op de aandelen- en obligatiemarkten.</p>
        </article>
      </div>

      <InteractiveInfographicCard
        title="Solvabiliteit KPN versus VodafoneZiggo"
        subtitle="Interactieve vergelijking van solvabiliteit, Debt Ratio en financiele positie."
        type="custom"
        items={solvabilityItems}
        previewText="Vergroot de infographic om op onderdelen te klikken."
        buttonText="Vergroot interactieve infographic"
        renderContent={({ preview, activeItem, onSelect }) => (
          <SolvabilityVisual
            items={solvabilityItems}
            activeId={activeItem?.id}
            interactive={!preview}
            onSelect={onSelect}
          />
        )}
      />

      <div className="report-conclusion solvability-conclusion">
        <h3>Conclusie solvabiliteit</h3>
        <p>Beide ondernemingen laten een stabiele ontwikkeling zien, wat wijst op strak financieel management in een volwassen markt. Toch staat KPN op basis van de solvabiliteitskengetallen fundamenteel sterker en veiliger dan VodafoneZiggo. Met een solvabiliteit van ongeveer 24% heeft KPN meer financiele flexibiliteit om economische tegenvallers of onverwachte marktontwikkelingen op te vangen. VodafoneZiggo heeft door de hoge schuldenstructuur een risicovoller profiel en is sterker afhankelijk van haar internationale moederbedrijven.</p>
      </div>

      <section className="solvability-source-note">
        <h3>Bronnen en controle</h3>
        <p>De financiele kengetallen voor solvabiliteit moeten worden gecontroleerd aan de hand van de meest recente jaarverslagen van KPN en VodafoneZiggo voordat ze definitief worden gebruikt.</p>
      </section>
    </section>
  )
}
