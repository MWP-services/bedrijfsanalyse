// Nieuwe opdrachten voeg je toe aan assignmentItems.
// Opdrachtteksten, tabellen, KPI's, bronnen en conclusies pas je hier aan.
// Afbeeldingen zet je in public/images en verwijs je met src: '/images/bestandsnaam.png'.
// Opdracht 1.3 is bewust als placeholder ingericht; vul later de definitieve canvasblokken hieronder aan.

const financialSources = [
  {
    title: 'Beurs FD - KPN Koninklijke | Bedrijfsgegevens',
    note: 'Gebruikt voor omzet, EBITDA, nettowinst, totaal activa, ROE, ROA, dividend en rentedekking.',
    url: 'https://beurs.fd.nl/noteringen/11754/kpn-koninklijke',
  },
  {
    title: 'Beurs FD - KPN Koninklijke | Kerncijfers',
    note: 'Gebruikt voor balansgegevens, kengetallen, vlottende activa, kortlopende schulden en activiteitskengetallen.',
    url: 'https://beurs.fd.nl/noteringen/11754/kpn-koninklijke/kerncijfers',
  },
  {
    title: 'KPN Integrated Annual Report 2025',
    note: 'Gebruikt voor service revenues, adjusted EBITDA AL, capex, free cash flow, dividend en ROCE.',
    url: 'https://ir.kpn.com/financials/annual-reports.htm',
  },
  {
    title: 'KPN Investor Relations - jaarresultaten 2025',
    note: 'Gebruikt voor toelichting op jaarresultaten, groei, outlook, investeringen en strategie.',
    url: 'https://ir.kpn.com/news-and-events/press-releases.htm',
  },
]

export const assignmentItems = [
  {
    id: 'hoofdstuk-1',
    opdrachtNummer: 'Hoofdstuk 1',
    titel: 'Profiel van de onderneming',
    subtitel: 'Bedrijfsanalyse KPN',
    korteIntro: 'Dit hoofdstuk beschrijft het profiel van KPN en werkt de eerste analyseopdrachten uit: missie, duurzaamheid, Business Model Canvas en het 7S-model.',
    volledigeTekst: '',
    sections: [],
    afbeeldingen: [],
    tabellen: [],
    bronnen: ['KPN Integrated Annual Report 2024.', 'KPN investor relations en corporate website.'],
    conclusie: 'Hoofdstuk 1 vormt de basis voor de verdere bedrijfsanalyse van KPN.',
  },
  {
    id: 'opdracht-1-1',
    opdrachtNummer: '1.1',
    titel: 'Ashridge Mission Model, kernwaarden en stakeholderanalyse',
    subtitel: 'Missie, waarden, gedragscode en stakeholders van KPN',
    korteIntro: 'In deze opdracht wordt KPN geanalyseerd aan de hand van het Ashridge Mission Model. Daarbij wordt gekeken naar de missie, visie, doelstellingen, strategie, kernwaarden, gedragscode en stakeholders van de onderneming.',
    volledigeTekst: '',
    sections: [
      {
        type: 'kpnInfographics',
        title: 'Interactieve infographics bij 1.1',
      },
      {
        type: 'cards',
        title: 'Missie, visie, doelstellingen en strategie',
        cards: [
          { title: 'Missie', text: 'KPN verbindt mensen, bedrijven en organisaties met betrouwbare en veilige digitale netwerken en diensten. Het bedrijf wil bijdragen aan een verbonden en digitaal toegankelijke samenleving.' },
          { title: 'Visie', text: 'KPN streeft naar een toekomst waarin digitale technologie veilig, innovatief en duurzaam is voor iedereen.' },
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
          { title: 'Strategie', text: 'KPN bereikt deze doelen door te investeren in glasvezel en 5G, cybersecurity, digitale innovatie, klantgerichte dienstverlening en duurzame bedrijfsvoering.' },
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
        title: 'Conclusie opdracht 1.1',
        text: 'De missie, visie, strategie en kernwaarden van KPN sluiten goed op elkaar aan. Door te investeren in innovatie, betrouwbaarheid en duurzaamheid kan KPN haar belangrijkste stakeholders bedienen en haar positie als toonaangevende telecomaanbieder behouden. Dit maakt het Ashridge Mission Model duidelijk zichtbaar binnen de organisatie.',
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: ['KPN Integrated Annual Report 2024.', 'Ashridge Mission Model, behandeld binnen Bedrijfsanalyse.'],
    conclusie: 'Het Ashridge Mission Model is duidelijk zichtbaar in de samenhang tussen missie, strategie, waarden en gedragsnormen van KPN.',
  },
  {
    id: 'opdracht-1-2',
    opdrachtNummer: '1.2',
    titel: 'Duurzaamheid, SDGs en ESG-beleid van KPN',
    subtitel: 'Responsible, Inclusive en Sustainable',
    korteIntro: 'Duurzaamheid vormt een belangrijk onderdeel van de strategie van KPN. In het Integrated Annual Report 2024 koppelt KPN haar ESG-beleid aan verschillende Sustainable Development Goals van de Verenigde Naties. Daarbij staan drie thema\'s centraal: Responsible, Inclusive en Sustainable.',
    volledigeTekst: '',
    sections: [
      {
        type: 'iconCards',
        title: 'Door KPN omarmde SDGs',
        cards: [
          { title: 'SDG 5', icon: 'Users', text: 'Gendergelijkheid.' },
          { title: 'SDG 7', icon: 'Leaf', text: 'Betaalbare en duurzame energie.' },
          { title: 'SDG 8', icon: 'TrendingUp', text: 'Waardig werk en economische groei.' },
          { title: 'SDG 9', icon: 'Network', text: 'Industrie, innovatie en infrastructuur.' },
          { title: 'SDG 10', icon: 'Users', text: 'Ongelijkheid verminderen.' },
          { title: 'SDG 12', icon: 'CheckCircle', text: 'Verantwoorde consumptie en productie.' },
          { title: 'SDG 13', icon: 'Leaf', text: 'Klimaatactie.' },
        ],
      },
      {
        type: 'kpis',
        title: 'Acties, resultaten en KPIs',
        text: 'Deze doelen sluiten goed aan bij de activiteiten van KPN als telecom- en infrastructuurbedrijf.',
        items: [
          { label: 'Net-zero doelstelling', value: '2040', text: 'KPN streeft ernaar om in 2040 een net-zero organisatie te zijn.' },
          { label: 'Scope 1-uitstoot 2024', value: '6.208 ton', text: 'CO2-equivalenten.' },
          { label: 'Scope 2-uitstoot 2024', value: '118.356 ton', text: 'CO2-equivalenten.' },
          { label: 'Scope 3-uitstoot 2024', value: '813.481 ton', text: 'CO2-equivalenten.' },
          { label: 'Circulariteit', value: '88%', text: 'In 2024 werd 88% van de materialen hergebruikt of gerecycled.' },
          { label: 'Doelstelling circulariteit', value: '86%', text: 'Doelstelling 2025: minimaal 86% hergebruik of recycling. Deze doelstelling is al behaald.' },
          { label: 'Glasvezel', value: '63%', text: 'Van de Nederlandse huishoudens had toegang tot het glasvezelnetwerk van KPN en Glaspoort.' },
          { label: '5G', value: '98%', text: 'KPN realiseerde een landelijke 5G-dekking van 98%.' },
          { label: 'Medewerkerbetrokkenheid', value: '81%', text: 'Boven de doelstelling van 80%.' },
          { label: 'Vrouwen senior management', value: '33%', text: 'Ten opzichte van de doelstelling van 36% voor 2025.' },
        ],
      },
      {
        type: 'table',
        title: 'Vergelijking met VodafoneZiggo',
        columns: ['Onderwerp', 'KPN', 'VodafoneZiggo'],
        rows: [
          ['CO2-reductie', 'Sterk gekoppeld aan netwerken en energie-efficientie', 'Investeert ook in CO2-reductie'],
          ['Circulariteit', '88% hergebruik/recycling in 2024', 'Investeert ook in circulariteit'],
          ['Digitale inclusie', 'Onderdeel van ESG-strategie', 'Ook onderdeel van ESG-beleid'],
          ['Rapportage', 'Uitgebreide KPIs en meetbare voortgang', 'ESG-rapportage aanwezig'],
          ['Koppeling aan kernactiviteiten', 'Sterk zichtbaar via glasvezel, 5G en energie-efficiente netwerken', 'Aanwezig, maar minder centraal weergegeven'],
        ],
        assessment: 'Het verschil is dat KPN duurzaamheid sterk koppelt aan haar kernactiviteiten, zoals glasvezel, 5G en energie-efficiente netwerken. Daarnaast rapporteert KPN uitgebreid over meetbare KPIs, waardoor de voortgang transparant en goed te beoordelen is.',
      },
      {
        type: 'cards',
        title: 'Relatie met bedrijfsvoering en greenwashing',
        cards: [
          { title: 'Integratie in bedrijfsvoering', text: 'De duurzaamheidsdoelen van KPN zijn direct verbonden met de dagelijkse operatie van het bedrijf. Investeringen in digitale infrastructuur, energiebesparing en circulaire apparatuur maken onderdeel uit van de kernactiviteiten. Hierdoor zijn de SDGs niet alleen ondersteunend aan de strategie, maar daadwerkelijk geintegreerd in de bedrijfsvoering.' },
          { title: 'Aandachtspunt greenwashing', text: 'Er zijn weinig aanwijzingen voor greenwashing. KPN onderbouwt haar duurzaamheidsclaims met concrete KPIs en rapporteert volgens de CSRD-richtlijnen. Wel blijft de relatief hoge Scope 3-uitstoot een aandachtspunt, omdat deze grotendeels afhankelijk is van leveranciers en partners.' },
        ],
      },
      {
        type: 'sustainabilityInfographic',
        title: 'Interactieve infographic: duurzaamheid en greenwashing',
      },
      {
        type: 'conclusion',
        title: 'Conclusie opdracht 1.2',
        text: 'KPN heeft duurzaamheid stevig geintegreerd in haar strategie en bedrijfsvoering. De organisatie levert via investeringen in glasvezel, 5G, duurzame energie, circulariteit en inclusiviteit een concrete bijdrage aan verschillende SDGs. Vergeleken met VodafoneZiggo is de koppeling tussen duurzaamheid en de operationele activiteiten van KPN duidelijk zichtbaar. Hierdoor kan worden geconcludeerd dat duurzaamheid binnen KPN meer is dan een marketinginstrument en daadwerkelijk onderdeel vormt van de bedrijfsstrategie.',
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: ['KPN. (2025). KPN Integrated Annual Report 2024. KPN N.V.', 'VodafoneZiggo. (2024). Environmental, Social & Governance Report 2024. VodafoneZiggo.'],
    conclusie: 'KPN koppelt duurzaamheid zichtbaar aan strategie, netwerkinvesteringen, circulariteit, inclusiviteit en meetbare ESG-KPIs.',
  },
  {
    id: 'opdracht-1-3',
    opdrachtNummer: '1.3',
    titel: 'Business Model Canvas KPN',
    subtitel: 'Negen bouwstenen van het bedrijfsmodel',
    korteIntro: 'Het Business Model Canvas laat zien hoe KPN waarde creeert, levert en verdient. Het model bestaat uit negen bouwstenen die samen inzicht geven in de klanten, waardepropositie, kanalen, klantrelaties, inkomstenstromen, kernmiddelen, kernactiviteiten, partners en kostenstructuur van KPN.',
    volledigeTekst: '',
    sections: [
      {
        type: 'businessModelCanvasKpn',
        title: '1.3 Business Model Canvas KPN',
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: ['Business Model Canvas model, toegepast op KPN.', 'KPN Integrated Annual Report 2024.', 'KPN corporate website en investor relations.'],
    conclusie: 'Het Business Model Canvas laat zien dat KPN waarde creeert via betrouwbare digitale connectiviteit, sterke infrastructuur en klantgerichte dienstverlening, maar daarvoor blijvend grote investeringen in netwerken, innovatie en personeel nodig heeft.',
  },
  {
    id: 'opdracht-1-4',
    opdrachtNummer: '1.4',
    titel: '7S-model van McKinsey toegepast op KPN',
    subtitel: 'Organisatorische samenhang bij KPN',
    korteIntro: 'Het 7S-model onderzoekt of de belangrijkste onderdelen van een organisatie goed op elkaar zijn afgestemd. Bij KPN is er sprake van een sterke samenhang tussen de verschillende elementen.',
    volledigeTekst: '',
    sections: [
      {
        type: 'sevenS',
        title: '7S-model KPN',
        items: [
          { title: 'Strategie', text: 'KPN richt zich op het verbinden van Nederland door te investeren in glasvezel, 5G, cybersecurity en digitale diensten. Daarnaast speelt duurzaamheid een belangrijke rol binnen de strategie.' },
          { title: 'Structuur', text: 'De organisatie is verdeeld in verschillende bedrijfsonderdelen, zoals consumenten-, zakelijke en netwerkdiensten. Deze structuur ondersteunt de uitvoering van de strategie.' },
          { title: 'Systemen', text: 'KPN maakt gebruik van geavanceerde IT-, netwerk- en beveiligingssystemen om haar dienstverlening betrouwbaar en efficient te laten verlopen.' },
          { title: 'Shared Values', text: 'De kernwaarden Trust, Courage en Growth vormen de basis van de organisatiecultuur. Deze waarden ondersteunen de missie om klanten betrouwbare en innovatieve diensten te bieden.' },
          { title: 'Style', text: 'KPN stimuleert samenwerking, innovatie en klantgerichtheid. De leiderschapsstijl sluit daardoor goed aan bij de strategische doelstellingen.' },
          { title: 'Staff', text: 'De onderneming investeert in opleiding, ontwikkeling en diversiteit van medewerkers om voldoende kennis en talent in huis te houden.' },
          { title: 'Skills', text: 'Belangrijke competenties zijn telecomtechnologie, IT, cybersecurity en digitale innovatie. Deze vaardigheden zijn essentieel voor het behalen van de strategische doelen.' },
        ],
        alignment: 'De zeven elementen sluiten grotendeels goed op elkaar aan. De strategie wordt ondersteund door de organisatiestructuur, de systemen en de aanwezige kennis van medewerkers. Ook de kernwaarden komen terug in de manier waarop KPN leiding geeft en haar dienstverlening organiseert.',
        gaps: 'Er zijn enkele aandachtspunten. Zo is er veel vraag naar technisch en IT-talent, waardoor het soms lastig kan zijn om voldoende gespecialiseerde medewerkers aan te trekken. Daarnaast kunnen grote investeringen in innovatie en duurzaamheid op korte termijn botsen met winstdoelstellingen. Deze spanningen zijn echter niet uitzonderlijk voor een grote telecomorganisatie.',
      },
      {
        type: 'conclusion',
        title: 'Conclusie opdracht 1.4',
        text: 'De toepassing van het 7S-model laat zien dat KPN een goed gebalanceerde organisatie is. De strategie, structuur, systemen, medewerkers, vaardigheden, leiderschapsstijl en kernwaarden versterken elkaar en ondersteunen gezamenlijk de missie van KPN om Nederland digitaal verbonden te houden.',
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: ['McKinsey 7S-model, behandeld binnen Bedrijfsanalyse.', 'KPN Integrated Annual Report 2024.'],
    conclusie: 'Het 7S-model laat zien dat KPN organisatorisch sterk samenhangt rond strategie, systemen, vaardigheden en gedeelde waarden.',
  },
  {
    id: 'hoofdstuk-2',
    opdrachtNummer: 'Hoofdstuk 2',
    titel: 'Brancheanalyse',
    subtitel: 'Afbakening en analysemethodiek',
    korteIntro: 'In dit hoofdstuk wordt een specifieke branche waarin KPN actief is geanalyseerd. Omdat KPN in meerdere markten actief is, wordt gekozen voor een duidelijk afgebakende branche. Deze branche wordt vervolgens onderzocht met behulp van een passende analysemethodiek, zoals het vijfkrachtenmodel van Porter of het SGR-schema van Bain.',
    volledigeTekst: '',
    sections: [
      {
        type: 'cards',
        title: 'Introductie brancheanalyse',
        cards: [
          {
            title: 'Waarom afbakenen?',
            text: 'Het is niet praktisch om voor alle branches waarin KPN actief is een aparte brancheanalyse te maken. Daarom wordt binnen deze opdracht een specifieke branche gekozen. Deze branche moet duidelijk worden afgebakend en uitgebreid worden geanalyseerd. Hierbij kan gebruik worden gemaakt van het vijfkrachtenmodel van Porter of het SGR-schema van Bain.',
          },
        ],
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: ['Vul hier later bronnen voor de brancheanalyse toe.'],
    conclusie: 'Hoofdstuk 2 vormt de basis voor opdracht 2.1, waarin de gekozen KPN-branche inhoudelijk wordt uitgewerkt.',
  },
  {
    id: 'opdracht-2-1',
    opdrachtNummer: '2.1',
    titel: 'Brancheanalyse',
    subtitel: 'Nederlandse telecomsector en het Vijfkrachtenmodel van Porter',
    korteIntro: 'Voor de brancheanalyse is gekozen voor de Nederlandse telecomsector, waarin KPN actief is als aanbieder van mobiele en vaste telecomdiensten, internet, glasvezel, 5G en zakelijke digitale diensten. De analyse wordt uitgewerkt aan de hand van het Vijfkrachtenmodel van Porter.',
    volledigeTekst: '',
    sections: [
      {
        type: 'chapterTwoBrancheAnalyse',
        title: '2.1 Brancheanalyse',
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: [
      'Porter, M. E. - The Five Competitive Forces That Shape Strategy.',
      'KPN Integrated Annual Report 2024/2025.',
      'Autoriteit Consument & Markt, Telecommonitor.',
      'Beurs FD en financiele databronnen indien gebruikt.',
    ],
    conclusie: 'KPN is actief in een competitieve telecomsector, maar beschikt door sterke infrastructuur, merkbekendheid en innovatie-investeringen over een goede uitgangspositie.',
  },
  {
    id: 'hoofdstuk-3',
    opdrachtNummer: 'Hoofdstuk 3',
    titel: 'Financiele analyse',
    subtitel: 'Solvabiliteit, liquiditeit, rentabiliteit en activiteitskengetallen',
    korteIntro: 'In hoofdstuk 3 wordt de financiele positie van KPN beoordeeld. De uitwerking is verdeeld in vier aparte paragrafen: solvabiliteit, liquiditeit, rentabiliteit en activiteitskengetallen.',
    volledigeTekst: '',
    sections: [],
    afbeeldingen: [],
    tabellen: [],
    bronnen: financialSources,
    conclusie: 'De financiele analyse wordt in de volgende paragrafen afzonderlijk uitgewerkt.',
  },
  {
    id: 'opdracht-3-1',
    opdrachtNummer: '3.1',
    titel: 'Solvabiliteit',
    subtitel: 'KPN versus VodafoneZiggo',
    korteIntro: 'De solvabiliteit laat zien in hoeverre KPN op lange termijn aan haar financiele verplichtingen kan voldoen. In deze paragraaf wordt KPN vergeleken met VodafoneZiggo.',
    volledigeTekst: '',
    sections: [
      {
        type: 'chapterThreeSolvability',
        title: '3.1 Solvabiliteitsanalyse',
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: financialSources,
    conclusie: 'KPN heeft op basis van de solvabiliteitskengetallen een sterker en veiliger financieel profiel dan VodafoneZiggo, maar de exacte jaarcijfers moeten nog worden gecontroleerd met recente jaarverslagen.',
  },
  {
    id: 'opdracht-3-2',
    opdrachtNummer: '3.2',
    titel: 'Liquiditeit',
    subtitel: 'Kortlopende verplichtingen en kasstromen',
    korteIntro: 'De liquiditeit van KPN wordt beoordeeld in combinatie met de stabiele kasstromen uit abonnementen en telecomdiensten. Definitieve liquiditeitsratio\'s moeten nog worden gecontroleerd met volledige balansgegevens.',
    volledigeTekst: '',
    sections: [
      {
        type: 'cards',
        title: 'Liquiditeitsbeoordeling',
        cards: [
          {
            title: 'Stabiele inkomsten',
            text: 'Telecombedrijven zoals KPN ontvangen veel terugkerende inkomsten uit abonnementen. Daardoor kan een lagere liquiditeitsratio minder direct problematisch zijn dan bij bedrijven met sterk wisselende inkomsten.',
          },
          {
            title: 'Aandachtspunt',
            text: 'Voor een definitieve current ratio en quick ratio zijn gecontroleerde bedragen nodig voor vlottende activa, voorraad en kortlopende schulden.',
          },
          {
            title: 'Kasstroom',
            text: 'De free cash flow van KPN bedroeg EUR 952 miljoen in 2025. Dit geeft ruimte voor investeringen, dividend en het voldoen aan verplichtingen.',
          },
        ],
      },
      {
        type: 'table',
        title: 'Liquiditeitskengetallen',
        columns: ['Kengetal', 'Berekening', 'Status', 'Toelichting'],
        rows: [
          ['Current ratio', 'Vlottende activa / kortlopende schulden', 'TODO', 'Gebruik deze ratio pas nadat beide bedragen zijn gecontroleerd in Beurs FD of het jaarverslag.'],
          ['Quick ratio', '(Vlottende activa - voorraad) / kortlopende schulden', 'TODO', 'Gebruik deze ratio pas nadat vlottende activa, voorraad en kortlopende schulden zeker beschikbaar zijn.'],
          ['Free cash flow', 'Beschikbaar uit jaarverslag', 'EUR 952 mln', 'KPN genereert veel vrije kasstroom uit de bedrijfsactiviteiten.'],
        ],
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: financialSources,
    conclusie: 'KPN lijkt door stabiele abonnementsinkomsten en sterke vrije kasstroom voldoende financiele ruimte te hebben, maar de definitieve liquiditeitsratio\'s moeten nog met balansgegevens worden vastgesteld.',
  },
  {
    id: 'opdracht-3-3',
    opdrachtNummer: '3.3',
    titel: 'Rentabiliteit',
    subtitel: 'Winstgevendheid en rendement',
    korteIntro: 'De rentabiliteit laat zien hoe winstgevend KPN is en hoe goed het bedrijf haar vermogen inzet. Hierbij worden nettowinst, marges, ROE, ROA en ROCE gebruikt.',
    volledigeTekst: '',
    sections: [
      {
        type: 'cards',
        title: 'Belangrijkste rentabiliteitscijfers',
        cards: [
          { title: 'Nettowinstmarge', text: 'EUR 855 mln / EUR 5.829 mln x 100 = circa 14,7%. Eigen berekening op basis van Beurs FD-cijfers.' },
          { title: 'EBITDA-marge', text: 'EUR 2.716 mln / EUR 5.829 mln x 100 = circa 46,6%. Eigen berekening op basis van Beurs FD-cijfers.' },
          { title: 'Rendementen', text: 'ROE bedraagt 24,31%, ROA bedraagt 8,84% en ROCE bedraagt 14,7%. Dit wijst op een winstgevende onderneming.' },
        ],
      },
      {
        type: 'table',
        title: 'Rentabiliteitskengetallen',
        columns: ['Onderwerp', 'Cijfer', 'Betekenis', 'Bron'],
        rows: [
          ['Omzet', 'EUR 5.829 mln', 'KPN is financieel een grote speler binnen de Nederlandse telecomsector.', 'Beurs FD'],
          ['Nettowinst', 'EUR 855 mln', 'KPN behaalt duidelijke winst uit haar activiteiten.', 'Beurs FD'],
          ['EBITDA', 'EUR 2.716 mln', 'KPN is operationeel sterk winstgevend.', 'Beurs FD'],
          ['Adjusted EBITDA AL', 'EUR 2.636 mln', 'Ondersteunt het beeld van operationele winstgevendheid.', 'KPN Integrated Annual Report 2025'],
          ['ROE', '24,31%', 'KPN behaalt een hoog rendement voor aandeelhouders.', 'Beurs FD'],
          ['ROA', '8,84%', 'KPN gebruikt haar totale activa winstgevend.', 'Beurs FD'],
        ],
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: financialSources,
    conclusie: 'KPN is winstgevend en kasstroomrijk. De nettowinstmarge, EBITDA-marge en rendementscijfers ondersteunen een positief beeld van de rentabiliteit.',
  },
  {
    id: 'opdracht-3-4',
    opdrachtNummer: '3.4',
    titel: 'Activiteitskengetallen',
    subtitel: 'Efficient gebruik van vermogen',
    korteIntro: 'Activiteitskengetallen laten zien hoe efficient KPN haar activa inzet om omzet te genereren. Voor KPN is dit belangrijk omdat telecom een kapitaalintensieve sector is.',
    volledigeTekst: '',
    sections: [
      {
        type: 'cards',
        title: 'Activiteitsanalyse',
        cards: [
          {
            title: 'Omloopsnelheid totaal vermogen',
            text: 'EUR 5.829 mln / EUR 12.696 mln = circa 0,46 keer. Dit betekent dat KPN relatief veel vermogen nodig heeft om omzet te genereren.',
          },
          {
            title: 'Kapitaalintensiteit',
            text: 'Dat is logisch voor een telecombedrijf, omdat netwerken, zendmasten, glasvezel en IT-systemen grote investeringen vragen.',
          },
          {
            title: 'Concurrentievoordeel',
            text: 'De infrastructuur maakt KPN kapitaalintensief, maar vormt tegelijk een belangrijk concurrentievoordeel binnen de Nederlandse telecomsector.',
          },
        ],
      },
      {
        type: 'table',
        title: 'Activiteitskengetallen',
        columns: ['Kengetal', 'Berekening', 'Uitkomst', 'Bron'],
        rows: [
          ['Omloopsnelheid totaal vermogen', 'EUR 5.829 mln / EUR 12.696 mln', 'circa 0,46 keer', 'Eigen berekening op basis van Beurs FD-cijfers'],
          ['Totaal activa', 'Beschikbaar uit bedrijfsgegevens', 'EUR 12.696 mln', 'Beurs FD'],
          ['Capex', 'Beschikbaar uit jaarverslag', 'EUR 1.263 mln', 'KPN Integrated Annual Report 2025'],
        ],
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: financialSources,
    conclusie: 'KPN heeft veel activa nodig om omzet te genereren. Dit past bij de telecomsector en onderstreept dat de netwerkinfrastructuur zowel een kostenpost als een strategisch voordeel is.',
  },
  {
    id: 'opdracht-3-5',
    opdrachtNummer: '3.5',
    titel: 'Werknemerscijfers',
    subtitel: 'Productiviteit en efficientie per medewerker',
    korteIntro: 'Werknemerscijfers geven inzicht in de productiviteit en efficientie van KPN. Door omzet en winst te relateren aan het aantal werknemers ontstaat een beeld van de prestaties per medewerker.',
    volledigeTekst: 'Binnen de telecomsector worden deze cijfers steeds belangrijker door digitalisering, automatisering en de toepassing van kunstmatige intelligentie. Voor deze analyse wordt gekeken naar omzet per werknemer en nettowinst per werknemer.',
    sections: [
      {
        type: 'cards',
        title: 'Formules',
        cards: [
          {
            title: 'Omzet per werknemer',
            text: 'Omzet / aantal FTE. Dit geeft weer hoeveel omzet gemiddeld door een werknemer wordt gerealiseerd.',
          },
          {
            title: 'Nettowinst per werknemer',
            text: 'Nettowinst / aantal FTE. Dit geeft aan hoeveel winst gemiddeld door een werknemer wordt gegenereerd.',
          },
        ],
      },
      {
        type: 'table',
        title: 'Financieel overzicht werknemerscijfers',
        columns: ['Kengetal', 'KPN 2025', 'KPN 2024', 'VodafoneZiggo 2025'],
        rows: [
          ['Aantal FTE', '9.136', '9.664', '5.891'],
          ['Omzet', 'EUR 5.797 mln', 'EUR 5.603 mln', 'EUR 3.999 mln'],
          ['Omzet per werknemer', 'EUR 635.000', 'EUR 580.000', 'EUR 679.000'],
          ['Nettowinst per werknemer', 'EUR 93.500', 'EUR 87.700', 'Negatief'],
        ],
      },
      {
        type: 'cards',
        title: 'Analyse en beoordeling',
        cards: [
          {
            title: 'Stijgende arbeidsproductiviteit',
            text: 'Het aantal medewerkers bij KPN is in 2025 afgenomen ten opzichte van 2024, terwijl de omzet juist is gestegen. Hierdoor nam de omzet per werknemer toe van ongeveer EUR 580.000 naar EUR 635.000.',
          },
          {
            title: 'Digitalisering en automatisering',
            text: 'De stijging kan grotendeels worden verklaard door verdere digitalisering van processen, automatisering van werkzaamheden en het gebruik van kunstmatige intelligentie binnen de organisatie.',
          },
          {
            title: 'Hogere winst per medewerker',
            text: 'Ook de nettowinst per werknemer is gestegen. Dit betekent dat de hogere productiviteit niet alleen leidt tot meer omzet, maar ook resulteert in hogere winstgevendheid.',
          },
          {
            title: 'Vergelijking met VodafoneZiggo',
            text: 'VodafoneZiggo realiseert een iets hogere omzet per werknemer, maar maakt verlies. KPN zet haar omzet wel om in winst en presteert daardoor sterker op efficientie en waardecreatie.',
          },
        ],
      },
      {
        type: 'conclusion',
        title: 'Eindbeoordeling opdracht 3.5',
        text: 'KPN slaagt erin om meer te doen met relatief minder medewerkers. De stijgende omzet per werknemer en hogere winst per werknemer wijzen op een efficiente organisatie en een succesvolle digitaliseringsstrategie. In vergelijking met VodafoneZiggo presteert KPN op dit gebied sterker.',
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: [
      'Koninklijke KPN N.V. (2025). Integrated Annual Report 2025. KPN.',
      'VodafoneZiggo Group B.V. (2025). Integrated Annual Report 2025. VodafoneZiggo.',
    ],
    conclusie: 'KPN laat een duidelijke verbetering van arbeidsproductiviteit en winst per medewerker zien en presteert hierdoor sterker dan VodafoneZiggo op waardecreatie.',
  },
  {
    id: 'opdracht-3-6',
    opdrachtNummer: '3.6',
    titel: 'Omgevingsanalyse',
    subtitel: 'Zeven belangrijkste omgevingsvariabelen voor KPN',
    korteIntro: 'De prestaties van KPN worden sterk beinvloed door ontwikkelingen in de externe omgeving. Op basis van de macro-omgeving en taakomgeving zijn zeven omgevingsvariabelen geselecteerd die de grootste invloed hebben op de huidige en toekomstige prestaties.',
    volledigeTekst: 'Deze factoren zijn nauw verbonden met de ontwikkelingen binnen de Nederlandse telecomsector en sluiten aan bij de brancheanalyse uit hoofdstuk 2.',
    sections: [
      {
        type: 'iconCards',
        title: 'Zeven omgevingsvariabelen',
        cards: [
          {
            title: 'Technologische ontwikkelingen',
            icon: 'Network',
            text: 'Glasvezel, 5G, cloudoplossingen en kunstmatige intelligentie zorgen voor groeikansen, maar vereisen ook hoge investeringen in netwerkverbeteringen.',
          },
          {
            title: 'Concurrentie',
            icon: 'Target',
            text: 'KPN, VodafoneZiggo en Odido domineren de Nederlandse telecommarkt. Door sterke concurrentie staan prijzen, marges en klantbehoud onder druk.',
          },
          {
            title: 'Wet- en regelgeving',
            icon: 'ShieldCheck',
            text: 'Privacy, cybersecurity, netwerkveiligheid, duurzaamheid en toezicht door de ACM hebben directe invloed op de bedrijfsvoering.',
          },
          {
            title: 'Economische ontwikkelingen',
            icon: 'TrendingUp',
            text: 'Inflatie, rente en koopkracht beinvloeden kosten en vraag. Telecom blijft wel een essentiele dienst, waardoor de vraag relatief stabiel blijft.',
          },
          {
            title: 'Arbeidsmarkt',
            icon: 'Users',
            text: 'Tekorten aan technisch personeel en IT-specialisten kunnen de aanleg van glasvezel, cybersecurity en digitale dienstverlening vertragen.',
          },
          {
            title: 'Duurzaamheid',
            icon: 'Leaf',
            text: 'Overheden, investeerders en klanten stellen hogere eisen aan klimaatdoelen, energiezuinige netwerken en circulaire bedrijfsvoering.',
          },
          {
            title: 'Cybersecurity',
            icon: 'Shield',
            text: 'Als beheerder van digitale infrastructuur moet KPN cyberaanvallen, reputatieschade en verstoringen van diensten voorkomen.',
          },
        ],
      },
      {
        type: 'cards',
        title: 'Analyse en beoordeling',
        cards: [
          {
            title: 'Grootste invloed',
            text: 'Technologische ontwikkelingen, concurrentie en cybersecurity hebben momenteel de grootste invloed op de prestaties van KPN. Glasvezel en 5G bieden kansen, maar vragen omvangrijke investeringen.',
          },
          {
            title: 'Concurrentiedruk',
            text: 'VodafoneZiggo en Odido investeren eveneens in netwerken. KPN moet zich daarom blijven onderscheiden met netwerkkwaliteit, service en innovatieve diensten.',
          },
          {
            title: 'Kostenstructuur',
            text: 'Regelgeving, duurzaamheid, economische ontwikkelingen en arbeidsmarktkrapte hebben vooral invloed op de kostenstructuur en strategische keuzes van KPN.',
          },
        ],
      },
      {
        type: 'conclusion',
        title: 'Eindbeoordeling opdracht 3.6',
        text: 'De externe omgeving van KPN biedt zowel kansen als bedreigingen. De grootste kansen liggen in glasvezel, 5G, digitalisering en zakelijke IT-diensten. De belangrijkste bedreigingen zijn hoge investeringskosten, toenemende concurrentie, personeelstekorten en cyberrisico\'s. Dankzij haar sterke marktpositie, omvangrijke netwerk en voortdurende investeringen lijkt KPN goed gepositioneerd om hierop in te spelen.',
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: [
      'Koninklijke KPN N.V. (2025). Integrated Annual Report 2025. KPN.',
      'Porter, M. E. (2008). The five competitive forces that shape strategy. Harvard Business Review, 86(1), 78-93.',
      'VodafoneZiggo Group B.V. (2025). Integrated Annual Report 2025. VodafoneZiggo.',
    ],
    conclusie: 'KPN heeft kansen door glasvezel, 5G en digitalisering, maar moet rekening houden met concurrentiedruk, investeringskosten, personeelstekorten en cyberrisico\'s.',
  },
  {
    id: 'opdracht-3-7',
    opdrachtNummer: '3.7',
    titel: 'Beleggingskengetallen',
    subtitel: 'WPA, koersontwikkeling, dividend en vrije kasstroom',
    korteIntro: 'Voor beleggers zijn niet alleen winstcijfers belangrijk, maar vooral de vraag of een onderneming op lange termijn waarde kan creeren voor aandeelhouders.',
    volledigeTekst: 'In deze beleggingsanalyse wordt gekeken naar winst per aandeel, dividend, vrije kasstroom en de ontwikkeling van de aandelenkoers. Deze kengetallen vormen samen een belangrijke basis voor een professioneel beleggingsadvies.',
    sections: [
      {
        type: 'table',
        title: 'Ontwikkeling van de winst per aandeel',
        columns: ['Jaar', 'WPA'],
        rows: [
          ['2021', 'EUR 0,31'],
          ['2022', 'EUR 0,18'],
          ['2023', 'EUR 0,20'],
          ['2024', 'EUR 0,20'],
          ['2025', 'EUR 0,21'],
        ],
        assessment: 'De WPA daalde sterk in 2022, maar herstelde daarna naar een stabiel en licht stijgend niveau. Voor een volwassen telecombedrijf is de stijging naar EUR 0,21 een positief signaal.',
      },
      {
        type: 'barChart',
        title: 'Grafiek ontwikkeling WPA',
        text: 'Winst per aandeel van KPN over 2021-2025.',
        items: [
          { label: '2021', value: 0.31, displayValue: 'EUR 0,31' },
          { label: '2022', value: 0.18, displayValue: 'EUR 0,18' },
          { label: '2023', value: 0.20, displayValue: 'EUR 0,20' },
          { label: '2024', value: 0.20, displayValue: 'EUR 0,20' },
          { label: '2025', value: 0.21, displayValue: 'EUR 0,21' },
        ],
      },
      {
        type: 'table',
        title: 'Relatie tussen WPA en ultimo koers',
        columns: ['Jaar', 'Ultimo koers'],
        rows: [
          ['2023', 'EUR 3,12'],
          ['2024', 'EUR 3,56'],
          ['2025', 'EUR 3,98'],
        ],
        assessment: 'De koers is sterker gestegen dan de WPA. Dit wijst erop dat beleggers niet alleen naar de huidige winst kijken, maar vooral vertrouwen hebben in toekomstige prestaties, glasvezelgroei, marktpositie en kasstromen.',
      },
      {
        type: 'table',
        title: 'Dividend per aandeel',
        columns: ['Jaar', 'Dividend per aandeel'],
        rows: [
          ['2023', 'EUR 0,15'],
          ['2024', 'EUR 0,17'],
          ['2025', 'EUR 0,182'],
        ],
        assessment: 'De stijgende dividenduitkeringen laten zien dat het management vertrouwen heeft in de toekomstige financiele positie van KPN. Voor defensieve beleggers is dit een belangrijk pluspunt.',
      },
      {
        type: 'cards',
        title: 'Sterke punten voor beleggers',
        cards: [
          {
            title: 'Stabiele winstontwikkeling',
            text: 'KPN laat na 2022 een stabiele en licht stijgende WPA zien. Dit ondersteunt het beeld van een volwassen en winstgevende onderneming.',
          },
          {
            title: 'Vrije kasstroom',
            text: 'De vrije kasstroom steeg van ongeveer EUR 886 miljoen in 2023 naar ruim EUR 950 miljoen in 2025. Daardoor kan KPN blijven investeren en aandeelhouders belonen.',
          },
          {
            title: 'Dividend en aandeleninkoop',
            text: 'KPN keert een groot deel van de vrije kasstromen uit via dividend en aandeleninkoop. Een lager aantal uitstaande aandelen kan de WPA op termijn verder ondersteunen.',
          },
          {
            title: 'Defensief profiel',
            text: 'De stabiele inkomsten uit abonnementen maken KPN minder gevoelig voor economische schommelingen dan veel ondernemingen in cyclische sectoren.',
          },
        ],
      },
      {
        type: 'cards',
        title: 'Zwakke punten en risico\'s',
        cards: [
          {
            title: 'Beperkte groei',
            text: 'De Nederlandse telecommarkt is volwassen. Hierdoor blijven de groeimogelijkheden beperkt en zal de winstgroei waarschijnlijk gematigd zijn.',
          },
          {
            title: 'Kapitaalintensief',
            text: 'Glasvezel, 5G en cybersecurity vragen jaarlijks hoge investeringen. Een groot deel van de kasstromen blijft nodig voor onderhoud en uitbreiding van infrastructuur.',
          },
          {
            title: 'Concurrentie',
            text: 'VodafoneZiggo en Odido kunnen druk zetten op prijzen, marges en klantbehoud. Dit blijft een belangrijk aandachtspunt voor toekomstige winstontwikkeling.',
          },
        ],
      },
      {
        type: 'conclusion',
        title: 'Eindbeoordeling en beleggingsadvies',
        text: 'Op basis van de beleggingskengetallen kan KPN worden beoordeeld als een aantrekkelijk aandeel voor defensieve beleggers. De onderneming combineert een stabiele winstontwikkeling met een groeiend dividend, sterke vrije kasstromen en een solide marktpositie. Voor beleggers die snelle groei zoeken zijn er aantrekkelijkere alternatieven, maar voor beleggers die stabiliteit, voorspelbare inkomsten en een relatief beperkt risicoprofiel zoeken, past een houden/kopen advies.',
      },
    ],
    afbeeldingen: [],
    tabellen: [],
    bronnen: financialSources,
    conclusie: 'KPN is vooral aantrekkelijk voor defensieve beleggers door stabiele winst, groeiend dividend, sterke vrije kasstroom en een solide marktpositie.',
  },
]
