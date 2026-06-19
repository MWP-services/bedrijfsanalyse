import { Building2, CircleDollarSign, Handshake, Headphones, Layers, Network, RadioTower, Store, Users } from 'lucide-react'
import InteractiveInfographicCard from './InteractiveInfographicCard.jsx'
import './BusinessModelCanvasSection.css'

const icons = {
  customers: Users,
  value: RadioTower,
  channels: Store,
  relations: Headphones,
  revenue: CircleDollarSign,
  resources: Network,
  activities: Layers,
  partners: Handshake,
  costs: Building2,
}

const businessModelItems = [
  {
    id: 'customers',
    number: '1',
    title: 'Klantsegmenten',
    shortText: 'Consumenten, zakelijke klanten en wholesale',
    description: 'KPN richt zich op verschillende klantsegmenten. Ten eerste bedient KPN particuliere consumenten met diensten zoals mobiel bellen, breedbandinternet en televisie. Daarnaast richt het bedrijf zich op zakelijke klanten, waaronder het midden- en kleinbedrijf, grootzakelijke klanten en overheidsorganisaties. Voor deze doelgroep levert KPN onder andere mobiele diensten, internet, cloudoplossingen en zakelijke connectiviteit. Ook bedient KPN wholesale-klanten, zoals andere telecomproviders en MVNOs. Daarnaast zijn IoT- en healthcarepartners belangrijke klantgroepen, omdat digitale netwerken steeds vaker worden gebruikt voor slimme apparaten, zorgoplossingen en dataverbindingen.',
    bullets: ['Particuliere consumenten', 'Zakelijke klanten', 'Wholesale-klanten', 'IoT- en healthcarepartners'],
  },
  {
    id: 'value',
    number: '2',
    title: 'Waardeproposities',
    shortText: 'Betrouwbare digitale connectiviteit',
    description: 'De belangrijkste waardepropositie van KPN is het leveren van betrouwbare en hoogwaardige connectiviteit. Dit doet het bedrijf via onder andere 5G, glasvezel en vaste internetverbindingen. Voor particuliere klanten biedt KPN bundels aan, zoals alles-in-een-pakketten en combinaties van mobiel en thuisinternet. Daarnaast onderscheidt KPN zich door een premium netwerkervaring, klantenservice en ondersteuning. Voor zakelijke klanten biedt KPN aanvullende oplossingen op het gebied van cloud, security en IoT. Ook duurzaamheid en innovatie vormen een belangrijk onderdeel van de waardepropositie.',
    bullets: ['Betrouwbare connectiviteit', 'Glasvezel en 5G', 'Mobiel en thuisbundels', 'Cloud, security en IoT', 'Duurzaamheid en innovatie'],
  },
  {
    id: 'channels',
    number: '3',
    title: 'Kanalen',
    shortText: 'Winkels, online, klantenservice en partners',
    description: 'KPN bereikt haar klanten via verschillende kanalen. Fysieke KPN-winkels spelen een rol in persoonlijk advies en verkoop. Daarnaast gebruikt KPN online kanalen zoals de website KPN.com en de KPN-app. Ook de klantenservice via telefoon en chat is een belangrijk contactkanaal. Verder maakt KPN gebruik van partnernetwerken, zoals wederverkopers en retailpartners. Voor zakelijke klanten zet KPN direct sales teams in, waarmee grotere klanten persoonlijk worden benaderd en ondersteund.',
    bullets: ['KPN-winkels', 'KPN.com en KPN-app', 'Klantenservice', 'Partnernetwerken', 'Direct sales teams'],
  },
  {
    id: 'relations',
    number: '4',
    title: 'Klantrelaties',
    shortText: 'Service, selfservice en accountmanagement',
    description: 'KPN onderhoudt klantrelaties via persoonlijke service in winkels en via de klantenservice. Daarnaast biedt het bedrijf online zelfserviceportalen aan, zoals MijnKPN, waar klanten zelf hun abonnementen en gegevens kunnen beheren. Voor particuliere klanten spelen loyaliteitsprogrammas en een goede gebruikerservaring een belangrijke rol. Voor zakelijke klanten is accountmanagement belangrijk, omdat deze klanten vaak behoefte hebben aan persoonlijk advies en maatwerkoplossingen. Ook communitys en social media worden gebruikt om contact met klanten te onderhouden.',
    bullets: ['Persoonlijke service', 'MijnKPN', 'Loyaliteitsprogrammas', 'Accountmanagement', 'Community en social media'],
  },
  {
    id: 'revenue',
    number: '5',
    title: 'Inkomstenstromen',
    shortText: 'Abonnementen, services en apparatuur',
    description: 'De belangrijkste inkomstenstromen van KPN komen uit abonnementen voor mobiele telefonie, breedbandinternet, televisie en bundels. Daarnaast verdient KPN aan zakelijke diensten zoals cloud, IT, security en connectiviteit. Ook ontvangt KPN inkomsten uit de verkoop van apparatuur, zoals telefoons en modems. Verder genereert het bedrijf omzet uit wholesale- en interconnectiediensten. Tot slot verdient KPN aan toegevoegde waarde diensten, zoals video-on-demand en extra digitale diensten.',
    bullets: ['Abonnementen', 'Zakelijke services', 'Apparatuurverkoop', 'Wholesale en interconnectie', 'Toegevoegde waarde diensten'],
  },
  {
    id: 'resources',
    number: '6',
    title: 'Kernmiddelen',
    shortText: 'Netwerken, systemen, merk en personeel',
    description: 'De kernmiddelen van KPN bestaan vooral uit de geavanceerde netwerkinfrastructuur. Hieronder vallen glasvezelnetwerken, 4G- en 5G-netwerken en zendmasten. Deze infrastructuur vormt de basis van de dienstverlening. Daarnaast zijn technologische platforms en IT-systemen belangrijk voor het leveren en beheren van digitale diensten. Ook het merk KPN en de reputatie van betrouwbaarheid zijn waardevolle middelen. Verder beschikt KPN over gekwalificeerd personeel, zoals technici, verkoopmedewerkers en supportmedewerkers. Andere belangrijke middelen zijn het distributienetwerk, spectrumfrequenties en vastgoedlocaties.',
    bullets: ['Glasvezel, 4G en 5G', 'Technologische platforms', 'Merk en reputatie', 'Gekwalificeerd personeel', 'Spectrumfrequenties'],
  },
  {
    id: 'activities',
    number: '7',
    title: 'Kernactiviteiten',
    shortText: 'Netwerkbeheer, support en innovatie',
    description: 'De kernactiviteiten van KPN bestaan uit netwerkbeheer en onderhoud. Het bedrijf moet zorgen dat de telecomnetwerken betrouwbaar, veilig en beschikbaar blijven. Daarnaast houdt KPN zich bezig met klantverwerving en klantbehoud via marketing en sales. Ook serviceverlening en support zijn belangrijke activiteiten. Verder investeert KPN in productontwikkeling en innovatie, bijvoorbeeld bij nieuwe digitale diensten en technologische toepassingen. Logistiek, supply chain management en IT-beheer ondersteunen de dagelijkse bedrijfsvoering.',
    bullets: ['Netwerkbeheer en onderhoud', 'Klantverwerving en klantbehoud', 'Service en support', 'Productontwikkeling en innovatie', 'IT-beheer'],
  },
  {
    id: 'partners',
    number: '8',
    title: 'Belangrijkste partners',
    shortText: 'Leveranciers, providers, overheid en IT-partners',
    description: 'KPN werkt samen met verschillende belangrijke partners. Voor de netwerkinfrastructuur zijn leveranciers van netwerkapparatuur belangrijk, zoals Ericsson, Huawei en Nokia. Daarnaast werkt KPN samen met mobiele toestelfabrikanten zoals Apple en Samsung. Ook contentpartners, zoals streamingdiensten en tv-zenders, zijn belangrijk voor het aanbieden van televisie- en entertainmentdiensten. Verder heeft KPN te maken met overheidsinstanties en regelgevers, zoals de ACM. IT- en cloudserviceproviders ondersteunen de digitale dienstverlening. Onderaannemers spelen een rol bij bijvoorbeeld netwerkuitrol, onderhoud en installatie.',
    bullets: ['Netwerkleveranciers', 'Toestelfabrikanten', 'Contentpartners', 'Overheid en ACM', 'IT- en cloudproviders', 'Onderaannemers'],
  },
  {
    id: 'costs',
    number: '9',
    title: 'Kostenstructuur',
    shortText: 'Infrastructuur, personeel en onderhoud',
    description: 'De kostenstructuur van KPN wordt sterk bepaald door netwerkinvesteringen. Hierbij gaat het om kapitaalinvesteringen in glasvezeluitrol, 5G en andere infrastructuur. Daarnaast heeft KPN operationele kosten, zoals onderhoud, energie en personeelskosten. Ook marketing- en verkoopkosten vormen een belangrijk deel van de kosten. Verder maakt KPN kosten voor klantenservice, licenties, rechten, belastingen en afschrijvingen. Door de grote afhankelijkheid van infrastructuur is KPN een kapitaalintensieve onderneming.',
    bullets: ['Netwerkinvesteringen', 'Onderhoud en energie', 'Personeelskosten', 'Marketing en verkoop', 'Klantenservice', 'Licenties en afschrijvingen'],
  },
]

const conclusion = 'Het Business Model Canvas laat zien dat KPN waarde creeert door betrouwbare digitale connectiviteit te leveren aan particuliere, zakelijke en wholesale-klanten. De sterke netwerkinfrastructuur, het merk, technologische kennis en klantgerichte dienstverlening vormen de basis van het verdienmodel. Tegelijkertijd vraagt dit businessmodel om grote investeringen in infrastructuur, innovatie en personeel. Daardoor is KPN een kapitaalintensieve onderneming, maar beschikt het bedrijf ook over sterke concurrentievoordelen binnen de Nederlandse telecomsector.'

function BusinessCanvasVisual({ items, activeId, interactive = false, onSelect }) {
  return (
    <div className={interactive ? 'bmc-visual is-interactive' : 'bmc-visual'}>
      <div className="bmc-visual-header">
        <span>Business Model Canvas</span>
        <h3>KPN</h3>
      </div>
      <div className="bmc-visual-grid">
        {items.map((item) => {
          const Icon = icons[item.id] || Layers
          const content = (
            <>
              <span className="bmc-number">{item.number}</span>
              <span className="bmc-icon"><Icon size={20} /></span>
              <strong>{item.title}</strong>
              <small>{item.shortText}</small>
              <ul>{item.bullets.slice(0, 3).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </>
          )

          if (!interactive) return <article className={`bmc-visual-card ${item.id}`} key={item.id}>{content}</article>

          return (
            <button className={activeId === item.id ? `bmc-visual-card ${item.id} active` : `bmc-visual-card ${item.id}`} key={item.id} type="button" onClick={() => onSelect(item)}>
              {content}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function BusinessModelCanvasSection() {
  return (
    <section className="business-model-section">
      <div className="business-model-header">
        <span className="eyebrow">1.3 Business Model Canvas KPN</span>
        <h3>Business Model Canvas KPN</h3>
        <p>Het Business Model Canvas laat zien hoe KPN waarde creeert, levert en verdient. Het model bestaat uit negen bouwstenen die samen inzicht geven in de klanten, waardepropositie, kanalen, klantrelaties, inkomstenstromen, kernmiddelen, kernactiviteiten, partners en kostenstructuur van KPN.</p>
      </div>

      <InteractiveInfographicCard
        title="1.3 Business Model Canvas KPN"
        subtitle="Negen bouwstenen van het bedrijfsmodel van KPN."
        type="custom"
        items={businessModelItems}
        previewText="Vergroot het canvas om op bouwstenen te klikken."
        buttonText="Vergroot Business Model Canvas"
        renderContent={({ preview, activeItem, onSelect }) => (
          <BusinessCanvasVisual
            items={businessModelItems}
            activeId={activeItem?.id}
            interactive={!preview}
            onSelect={onSelect}
          />
        )}
      />

      <div className="business-model-detail-grid">
        {businessModelItems.map((item) => {
          const Icon = icons[item.id] || Layers
          return (
            <article className="business-model-detail-card" key={item.id}>
              <span className="icon-badge"><Icon size={20} /></span>
              <h4>{item.number}. {item.title}</h4>
              <p>{item.description}</p>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          )
        })}
      </div>

      <div className="report-conclusion business-model-conclusion">
        <h3>Conclusie Business Model Canvas</h3>
        <p>{conclusion}</p>
      </div>
    </section>
  )
}
