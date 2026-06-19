import ashridgeImage from '../assets/ashridge.png'
import InteractiveInfographicCard from './InteractiveInfographicCard.jsx'
import KpnOverviewInfographic from './KpnOverviewInfographic.jsx'
import './KpnInfographicsSection.css'

// De hotspot-posities van de Ashridge-afbeelding kun je handmatig aanpassen met top, left, width en height.
const ashridgeItems = [
  {
    id: 'missie',
    title: 'Missie',
    description: 'KPN verbindt mensen, bedrijven en organisaties met betrouwbare en veilige digitale netwerken en diensten. Het bedrijf wil bijdragen aan een verbonden en digitaal toegankelijke samenleving.',
    bullets: [
      'Verbindt mensen, bedrijven en organisaties',
      'Focus op betrouwbare en veilige digitale netwerken',
      'Draagt bij aan digitale toegankelijkheid',
    ],
    hotspot: { top: '25%', left: '5%', width: '20%', height: '18%' },
  },
  {
    id: 'visie',
    title: 'Visie',
    description: 'KPN streeft naar een toekomst waarin digitale technologie veilig, innovatief en duurzaam is voor iedereen.',
    bullets: [
      'Veilige digitale toekomst',
      'Innovatie staat centraal',
      'Duurzame technologie voor iedereen',
    ],
    hotspot: { top: '25%', left: '27%', width: '20%', height: '18%' },
  },
  {
    id: 'doel',
    title: 'Doel (Purpose)',
    description: 'Het doel van KPN is om mensen en organisaties met elkaar te verbinden door betrouwbare digitale communicatie mogelijk te maken.',
    bullets: [
      'Geeft aan waarom KPN bestaat',
      'Mensen en organisaties verbinden',
      'Betrouwbare digitale communicatie mogelijk maken',
    ],
    hotspot: { top: '25%', left: '50%', width: '20%', height: '18%' },
  },
  {
    id: 'strategie',
    title: 'Strategie (Strategy)',
    description: 'KPN bereikt haar doel door te investeren in netwerken, innovatie, veiligheid en duurzaamheid.',
    bullets: [
      'Investeren in glasvezel en 5G',
      'Cybersecurity versterken',
      'Digitale innovatie stimuleren',
      'Duurzame bedrijfsvoering toepassen',
    ],
    hotspot: { top: '25%', left: '72%', width: '20%', height: '18%' },
  },
  {
    id: 'waarden',
    title: 'Waarden (Values)',
    description: 'De waarden van KPN laten zien waar de organisatie voor staat en welke principes belangrijk zijn binnen het bedrijf.',
    bullets: [
      'Betrouwbaarheid',
      'Innovatie',
      'Klantgerichtheid',
      'Verantwoordelijkheid',
      'Duurzaamheid',
    ],
    hotspot: { top: '48%', left: '5%', width: '20%', height: '18%' },
  },
  {
    id: 'gedragsnormen',
    title: 'Gedragsnormen (Behaviour Standards)',
    description: 'De gedragsnormen van KPN beschrijven hoe medewerkers horen te handelen. Daarbij staan integriteit, klantgerichtheid en verantwoordelijkheid centraal.',
    bullets: [
      'Integer handelen',
      'Klantgericht werken',
      'Privacy respecteren',
      'Wet- en regelgeving naleven',
      'Verantwoord omgaan met middelen',
    ],
    hotspot: { top: '48%', left: '27%', width: '20%', height: '18%' },
  },
  {
    id: 'kernwaarden',
    title: 'Kernwaarden',
    description: 'De kernwaarden ondersteunen de missie en strategie van KPN en vormen de basis voor de manier waarop de organisatie werkt.',
    bullets: [
      'Betrouwbaarheid: stabiele en veilige diensten',
      'Innovatie: continu investeren in nieuwe technologie',
      'Klantgerichtheid: de wensen van klanten staan centraal',
      'Verantwoordelijkheid: aandacht voor privacy, veiligheid en maatschappelijke impact',
      'Duurzaamheid: werken aan een toekomstbestendige organisatie',
    ],
    hotspot: { top: '48%', left: '50%', width: '20%', height: '18%' },
  },
  {
    id: 'conclusie',
    title: 'Conclusie',
    description: 'De missie, visie, strategie en kernwaarden van KPN sluiten goed op elkaar aan. Daardoor kan KPN haar belangrijkste stakeholders bedienen en haar positie als toonaangevende telecomaanbieder behouden.',
    bullets: [
      'Onderdelen versterken elkaar',
      'Duidelijke samenhang binnen de organisatie',
      'Focus op betrouwbaarheid, innovatie en duurzaamheid',
      'Ashridge Mission Model is duidelijk zichtbaar binnen KPN',
    ],
    hotspot: { top: '48%', left: '72%', width: '20%', height: '18%' },
  },
]

const kpnOverviewItems = [
  {
    id: 'missie-visie',
    title: 'Missie & Visie',
    description: 'KPN verbindt mensen, bedrijven en organisaties met betrouwbare en veilige digitale netwerken en diensten. De visie richt zich op een toekomst waarin digitale technologie veilig, innovatief en duurzaam is voor iedereen.',
    bullets: [
      'Mensen, bedrijven en organisaties verbinden',
      'Betrouwbare en veilige digitale netwerken',
      'Digitale technologie veilig, innovatief en duurzaam maken',
    ],
  },
  {
    id: 'doelstellingen',
    title: 'Doelstellingen',
    description: 'KPN heeft duidelijke doelen die gericht zijn op betrouwbare dienstverlening, klanttevredenheid, netwerkuitbreiding, digitale veiligheid en duurzaamheid.',
    bullets: [
      'Betrouwbare telecom- en internetdiensten leveren',
      'Klanttevredenheid verhogen',
      'Glasvezel- en 5G-netwerken uitbreiden',
      'Digitale veiligheid versterken',
      'Duurzaam ondernemen',
    ],
  },
  {
    id: 'strategie',
    title: 'Strategie',
    description: 'KPN bereikt haar doelen door te investeren in glasvezel, 5G, cybersecurity, digitale innovatie, klantgerichte dienstverlening en duurzame bedrijfsvoering.',
    bullets: [
      'Glasvezel en 5G',
      'Cybersecurity',
      'Digitale innovatie',
      'Klantgerichte dienstverlening',
      'Duurzame bedrijfsvoering',
    ],
  },
  {
    id: 'ashridge-model',
    title: 'Ashridge Mission Model',
    description: 'Het Ashridge Mission Model laat zien dat het doel, de strategie, de waarden en gedragsnormen van KPN goed op elkaar aansluiten.',
    bullets: [
      'Doel: betrouwbare digitale communicatie mogelijk maken',
      'Strategie: investeren in netwerken, innovatie, veiligheid en duurzaamheid',
      'Waarden: betrouwbaarheid, innovatie, klantgerichtheid, verantwoordelijkheid en duurzaamheid',
      'Gedragsnormen: integer, klantgericht en verantwoord handelen',
    ],
  },
  {
    id: 'kernwaarden',
    title: 'Kernwaarden',
    description: 'De kernwaarden van KPN ondersteunen de missie en strategie van het bedrijf. Ze laten zien welk gedrag en welke houding belangrijk zijn binnen de organisatie.',
    bullets: ['Betrouwbaarheid', 'Innovatie', 'Klantgerichtheid', 'Verantwoordelijkheid', 'Duurzaamheid'],
  },
  {
    id: 'gedragscode',
    title: 'Gedragscode',
    description: 'Van medewerkers wordt verwacht dat zij eerlijk, transparant, klantgericht en verantwoord handelen. Ook moeten zij privacy respecteren en wet- en regelgeving naleven.',
    bullets: [
      'Eerlijk en transparant handelen',
      'Privacy respecteren',
      'Klantgericht werken',
      'Wet- en regelgeving naleven',
      'Verantwoord omgaan met middelen',
    ],
  },
  {
    id: 'stakeholders',
    title: 'Stakeholderanalyse',
    description: 'KPN heeft verschillende interne en externe stakeholders. Klanten, medewerkers, aandeelhouders en overheid/ACM hebben de meeste invloed op het succes van de organisatie.',
    bullets: [
      'Klanten: betrouwbare dienstverlening',
      'Medewerkers: goede arbeidsvoorwaarden',
      'Aandeelhouders: rendement en groei',
      'Leveranciers: samenwerking',
      'Overheid/ACM: wet- en regelgeving',
      'Maatschappij: duurzaamheid en privacy',
    ],
  },
  {
    id: 'krachtenveld',
    title: 'Krachtenveld',
    description: 'In het krachtenveld vallen klanten, medewerkers, aandeelhouders en overheid/ACM onder hoog belang en hoge invloed. Deze groepen zijn daarom het belangrijkst voor KPN.',
    bullets: [
      'Hoog belang en hoge invloed: klanten, medewerkers, aandeelhouders en overheid/ACM',
      'Hoog belang en lage invloed: maatschappelijke organisaties en lokale gemeenschappen',
      'Lage belang en hoge invloed: grote leveranciers en technologiepartners',
      'Lage belang en lage invloed: algemeen publiek',
    ],
  },
  {
    id: 'conclusie',
    title: 'Conclusie',
    description: 'De missie, visie, strategie en kernwaarden van KPN sluiten goed op elkaar aan. Door te investeren in innovatie, betrouwbaarheid en duurzaamheid kan KPN haar belangrijkste stakeholders bedienen en haar positie behouden.',
    bullets: [
      'Missie, visie en strategie sluiten goed op elkaar aan',
      'Kernwaarden ondersteunen de richting van KPN',
      'Belangrijke stakeholders worden meegenomen',
      'KPN blijft betrouwbaar, innovatief en duurzaam',
    ],
  },
]

export default function KpnInfographicsSection() {
  return (
    <section className="kpn-infographics-section">
      <div className="section-title-row">
        <h3>Interactieve infographics bij 1.1</h3>
        <span className="status-badge">Interactief bij vergroten</span>
      </div>
      <p className="section-note">Vergroot de infographic om op onderdelen te klikken.</p>
      <div className="kpn-infographics-grid">
        <InteractiveInfographicCard
          title="Ashridge Mission Model infographic"
          subtitle="Bestaande infographic over missie, visie, doel, strategie, waarden en gedragsnormen."
          type="image"
          image={ashridgeImage}
          items={ashridgeItems}
        />
        <InteractiveInfographicCard
          title="KPN in 1 oogopslag infographic"
          subtitle="Compact dashboard over missie, strategie, kernwaarden, gedragscode, stakeholders en conclusie."
          type="custom"
          items={kpnOverviewItems}
          renderContent={({ preview, activeItem, onSelect }) => (
            <KpnOverviewInfographic
              items={kpnOverviewItems}
              activeId={activeItem?.id}
              interactive={!preview}
              onSelect={onSelect}
            />
          )}
        />
      </div>
    </section>
  )
}
