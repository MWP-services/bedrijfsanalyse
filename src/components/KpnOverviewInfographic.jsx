import { CheckCircle, Eye, Handshake, Leaf, Network, RadioTower, ShieldCheck, Target, Users } from 'lucide-react'
import './KpnOverviewInfographic.css'

const icons = {
  'missie-visie': Network,
  doelstellingen: Target,
  strategie: RadioTower,
  'ashridge-model': Eye,
  kernwaarden: ShieldCheck,
  gedragscode: CheckCircle,
  stakeholders: Users,
  krachtenveld: Handshake,
  conclusie: Leaf,
}

const shortTexts = {
  'missie-visie': 'Digitaal verbinden',
  doelstellingen: 'Betrouwbaar groeien',
  strategie: 'Investeren in technologie',
  'ashridge-model': 'Samenhang in richting',
  kernwaarden: 'Waar KPN voor staat',
  gedragscode: 'Hoe medewerkers handelen',
  stakeholders: 'Belangrijke betrokkenen',
  krachtenveld: 'Invloed en belang',
  conclusie: 'Alles sluit aan',
}

export default function KpnOverviewInfographic({ items, activeId, interactive = false, onSelect }) {
  return (
    <div className={interactive ? 'kpn-overview-infographic is-interactive' : 'kpn-overview-infographic'}>
      <div className="kpn-overview-header">
        <span>KPN</span>
        <h3>KPN in 1 oogopslag</h3>
        <p>Missie, strategie, waarden en stakeholders compact samengevat.</p>
      </div>
      <div className="kpn-overview-grid">
        {items.map((item) => {
          const Icon = icons[item.id] || CheckCircle
          const content = (
            <>
              <span className="kpn-overview-icon"><Icon size={22} /></span>
              <strong>{item.title}</strong>
              <small>{shortTexts[item.id]}</small>
            </>
          )

          if (!interactive) {
            return <article className="kpn-overview-card" key={item.id}>{content}</article>
          }

          return (
            <button
              className={activeId === item.id ? 'kpn-overview-card active' : 'kpn-overview-card'}
              key={item.id}
              type="button"
              onClick={() => onSelect(item)}
            >
              {content}
            </button>
          )
        })}
      </div>
    </div>
  )
}
