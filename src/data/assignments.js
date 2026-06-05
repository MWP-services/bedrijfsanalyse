const baseTable = {
  title: 'Tabel voor KPN-analyse',
  columns: ['Kengetal', 'Jaar 1', 'Jaar 2', 'Toelichting'],
  rows: [['Vul in', '-', '-', 'Plaats hier de interpretatie voor KPN']],
}

const baseImages = [
  { title: 'Grafiek voor KPN', caption: 'Plaats afbeeldingen in public/images en verwijs bijvoorbeeld naar /images/kpn-grafiek.png.' },
]

const kpnMissionAssignment = {
  id: 'opdracht-1-ashridge',
  opdrachtNummer: '1',
  titel: 'Evaluatie missie, visie, doelstellingen en strategie',
  subtitel: 'KPN volgens het Ashridge Mission Model',
  korteIntro: 'In deze opdracht wordt onderzocht in hoeverre de missie, visie, doelstellingen, strategie, kernwaarden en gedragsnormen van KPN logisch op elkaar aansluiten. Hiervoor wordt gebruikgemaakt van het Ashridge Mission Model.',
  volledigeTekst: '',
  sections: [
    {
      type: 'cards',
      title: 'Missie, visie, doelstellingen en strategie',
      cards: [
        {
          title: 'Missie',
          text: 'KPN verbindt mensen, bedrijven en organisaties met betrouwbare en veilige digitale netwerken en diensten. Het bedrijf wil bijdragen aan een verbonden en digitaal toegankelijke samenleving.',
        },
        {
          title: 'Visie',
          text: 'KPN streeft naar een toekomst waarin digitale technologie veilig, innovatief en duurzaam is voor iedereen.',
        },
        {
          title: 'Doelstellingen',
          items: [
            'Betrouwbare telecom- en internetdiensten leveren.',
            'Klanttevredenheid verhogen.',
            'Glasvezel- en 5G-netwerken uitbreiden.',
            'Digitale veiligheid versterken.',
            'Duurzaam ondernemen.',
          ],
        },
        {
          title: 'Strategie',
          items: [
            'Investeren in glasvezel en 5G.',
            'Investeren in cybersecurity.',
            'Stimuleren van digitale innovatie.',
            'Verbeteren van klantgerichte dienstverlening.',
            'Versterken van duurzame bedrijfsvoering.',
          ],
        },
      ],
    },
    {
      type: 'table',
      title: 'Ashridge Mission Model',
      columns: ['Onderdeel', 'Toepassing bij KPN'],
      rows: [
        ['Doel (Purpose)', 'Mensen en organisaties verbinden door betrouwbare digitale communicatie mogelijk te maken.'],
        ['Strategie (Strategy)', 'Investeren in netwerken, innovatie, veiligheid en duurzaamheid.'],
        ['Waarden (Values)', 'Betrouwbaarheid, innovatie, klantgerichtheid, verantwoordelijkheid en duurzaamheid.'],
        ['Gedragsnormen (Behaviour Standards)', 'Integer, klantgericht en verantwoord handelen.'],
      ],
      assessment: 'De strategie, waarden en gedragsnormen ondersteunen het doel van KPN. Ze zorgen ervoor dat de organisatie betrouwbaar, innovatief en klantgericht blijft.',
    },
    {
      type: 'iconCards',
      title: 'Kernwaarden',
      cards: [
        { title: 'Betrouwbaarheid', icon: 'ShieldCheck', text: 'KPN levert stabiele en veilige diensten.' },
        { title: 'Innovatie', icon: 'TrendingUp', text: 'KPN investeert continu in nieuwe technologieen.' },
        { title: 'Klantgerichtheid', icon: 'Users', text: 'De wensen van klanten staan centraal.' },
        { title: 'Verantwoordelijkheid', icon: 'CheckCircle', text: 'Privacy, veiligheid en maatschappelijke impact zijn belangrijke aandachtspunten.' },
        { title: 'Duurzaamheid', icon: 'Leaf', text: 'KPN werkt aan een toekomstbestendige en duurzame organisatie.' },
      ],
    },
    {
      type: 'checklist',
      title: 'Van medewerkers wordt verwacht dat zij:',
      items: [
        'Eerlijk en transparant handelen.',
        'Privacy respecteren.',
        'Klantgericht werken.',
        'Wet- en regelgeving naleven.',
        'Verantwoord omgaan met middelen.',
      ],
      assessment: 'Deze gedragsregels sluiten goed aan bij de missie en kernwaarden van KPN.',
    },
    {
      type: 'table',
      title: 'Stakeholderanalyse',
      columns: ['Stakeholder', 'Belang', 'Invloed'],
      rows: [
        ['Klanten', 'Betrouwbare dienstverlening', 'Hoog'],
        ['Medewerkers', 'Goede arbeidsvoorwaarden', 'Hoog'],
        ['Aandeelhouders', 'Rendement en groei', 'Hoog'],
        ['Leveranciers', 'Samenwerking', 'Gemiddeld'],
        ['Overheid/ACM', 'Wet- en regelgeving', 'Hoog'],
        ['Maatschappij', 'Duurzaamheid en privacy', 'Gemiddeld'],
      ],
      assessment: 'Klanten, medewerkers, aandeelhouders en de overheid zijn de belangrijkste stakeholders omdat zij veel invloed hebben op het succes van KPN.',
    },
    {
      type: 'matrix',
      title: 'Krachtenveld',
      cells: [
        { title: 'Hoog belang - Hoge invloed', items: ['Klanten', 'Medewerkers', 'Aandeelhouders', 'Overheid/ACM'] },
        { title: 'Hoog belang - Lage invloed', items: ['Maatschappelijke organisaties', 'Lokale gemeenschappen'] },
        { title: 'Laag belang - Hoge invloed', items: ['Grote leveranciers', 'Technologiepartners'] },
        { title: 'Laag belang - Lage invloed', items: ['Algemeen publiek'] },
      ],
    },
    {
      type: 'conclusion',
      title: 'Conclusie',
      text: 'De missie, visie, strategie en kernwaarden van KPN sluiten goed op elkaar aan. Door te investeren in innovatie, betrouwbaarheid en duurzaamheid kan KPN haar belangrijkste stakeholders bedienen en haar positie als toonaangevende telecomaanbieder behouden. Dit maakt het Ashridge Mission Model duidelijk zichtbaar binnen de organisatie.',
    },
  ],
  afbeeldingen: [],
  tabellen: [],
  bronnen: [
    'KPN jaarverslag en strategiepagina, te controleren en aan te vullen met de definitieve bronvermelding.',
    'Ashridge Mission Model, te verwijzen volgens de afgesproken bronstijl.',
  ],
  conclusie: 'De samenhang tussen missie, visie, strategie, kernwaarden en gedragsnormen is sterk zichtbaar bij KPN.',
}

const assignmentTemplates = [
  ['1.1', 'Profiel van KPN'],
  ['1.2', 'Evaluatie SDGs en duurzaamheid bij KPN'],
  ['2.1', 'Brancheanalyse Nederlandse telecommarkt'],
  ['3.1', 'Solvabiliteit KPN'],
  ['3.2', 'Liquiditeit KPN'],
  ['3.3', 'Rentabiliteit KPN'],
  ['3.4', 'Activiteit KPN'],
  ['3.5', 'Werknemerskengetallen KPN'],
  ['3.6', 'Omgevingsanalyse KPN'],
  ['3.7', 'Beleggingskengetallen KPN'],
  ['5.1', 'Commercieel risico KPN'],
  ['5.2', 'Bedrijfsrisico KPN'],
  ['5.3', 'Financieel risico KPN'],
  ['5.4', 'Risicoprofiel KPN'],
  ['8.1', 'SWOT-analyse KPN'],
  ['9.1', 'Professioneel beleggingsadvies KPN'],
]

// Pas opdrachten hier aan. Voeg tekst, afbeeldingen, tabellen, bronnen en conclusies per opdracht toe.
export const assignmentItems = [
  kpnMissionAssignment,
  ...assignmentTemplates.map(([opdrachtNummer, titel]) => ({
    id: `opdracht-${opdrachtNummer.replace('.', '-')}`,
    opdrachtNummer,
    titel,
    korteIntro: `Werk hier de opdracht over ${titel} uit voor KPN.`,
    volledigeTekst: 'Vul hier de volledige KPN-uitwerking in. Gebruik feitelijke onderbouwing, bronvermelding en een duidelijke interpretatie.',
    afbeeldingen: baseImages,
    tabellen: [baseTable],
    bronnen: ['Vul hier KPN-bronvermeldingen in volgens de afgesproken stijl.'],
    conclusie: 'Vul hier de conclusie van deze KPN-opdracht in.',
  })),
]
