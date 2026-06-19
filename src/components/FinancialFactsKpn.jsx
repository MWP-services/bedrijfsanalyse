import { AlertTriangle, BarChart3, BookOpen, Calculator, CircleDollarSign, FileText, LineChart, Shield } from 'lucide-react'
import TableBlock from './TableBlock.jsx'
import './FinancialFactsKpn.css'

const factCards = [
  { label: 'Omzet 2025', value: 'EUR 5.829 mln', source: 'Bron: Beurs FD, 2025' },
  { label: 'EBITDA 2025', value: 'EUR 2.716 mln', source: 'Bron: Beurs FD, 2025' },
  { label: 'Nettowinst 2025', value: 'EUR 855 mln', source: 'Bron: Beurs FD, 2025' },
  { label: 'Totaal activa 2025', value: 'EUR 12.696 mln', source: 'Bron: Beurs FD, 2025' },
  { label: 'Free cash flow 2025', value: 'EUR 952 mln', source: 'Bron: KPN Integrated Annual Report 2025' },
  { label: 'Capex 2025', value: 'EUR 1.263 mln', source: 'Bron: KPN Integrated Annual Report 2025' },
  { label: 'ROE', value: '24,31%', source: 'Bron: Beurs FD, 2025' },
  { label: 'ROA', value: '8,84%', source: 'Bron: Beurs FD, 2025' },
  { label: 'ROCE', value: '14,7%', source: 'Bron: KPN Integrated Annual Report 2025' },
  { label: 'Dividend', value: 'EUR 0,182 p/a', source: 'Bron: KPN Integrated Annual Report 2025' },
]

const financialRows = [
  ['Omzet', 'EUR 5.829 mln', 'KPN is financieel een grote speler binnen de Nederlandse telecomsector.', 'Beurs FD'],
  ['EBITDA', 'EUR 2.716 mln', 'Laat zien dat KPN operationeel sterk winstgevend is.', 'Beurs FD'],
  ['Nettowinst', 'EUR 855 mln', 'KPN behaalt duidelijke winst uit haar activiteiten.', 'Beurs FD'],
  ['Free cash flow', 'EUR 952 mln', 'KPN genereert veel vrije kasstroom, wat ruimte geeft voor dividend, investeringen en schuldafbouw.', 'KPN Integrated Annual Report 2025'],
  ['Capex', 'EUR 1.263 mln', 'KPN blijft fors investeren in infrastructuur zoals glasvezel, 5G en digitale netwerken.', 'KPN Integrated Annual Report 2025'],
  ['ROE', '24,31%', 'KPN behaalt een hoog rendement voor aandeelhouders.', 'Beurs FD'],
  ['ROA', '8,84%', 'KPN gebruikt haar totale activa winstgevend.', 'Beurs FD'],
  ['Rentedekking', '5,06', 'KPN kan haar rentelasten ruim dragen vanuit het resultaat.', 'Beurs FD'],
]

const ratioCards = [
  {
    title: 'Nettowinstmarge',
    formula: 'EUR 855 mln / EUR 5.829 mln x 100',
    outcome: 'circa 14,7%',
    note: 'Eigen berekening op basis van Beurs FD-cijfers.',
  },
  {
    title: 'EBITDA-marge',
    formula: 'EUR 2.716 mln / EUR 5.829 mln x 100',
    outcome: 'circa 46,6%',
    note: 'Eigen berekening op basis van Beurs FD-cijfers.',
  },
  {
    title: 'Omloopsnelheid totaal vermogen',
    formula: 'EUR 5.829 mln / EUR 12.696 mln',
    outcome: 'circa 0,46 keer',
    note: 'Eigen berekening op basis van Beurs FD-cijfers.',
  },
  {
    title: 'Solvabiliteit',
    formula: 'eigen vermogen / totaal vermogen x 100',
    outcome: 'TODO',
    note: 'Controleer eigen vermogen in jaarverslag of Beurs FD voordat deze ratio definitief wordt gebruikt.',
    warning: true,
  },
  {
    title: 'Current ratio',
    formula: 'vlottende activa / kortlopende schulden',
    outcome: 'TODO',
    note: 'Gebruik deze ratio pas als beide bedragen zijn gecontroleerd in Beurs FD of het jaarverslag.',
    warning: true,
  },
  {
    title: 'Quick ratio',
    formula: '(vlottende activa - voorraad) / kortlopende schulden',
    outcome: 'TODO',
    note: 'Gebruik deze ratio pas als vlottende activa, voorraad en kortlopende schulden zeker beschikbaar zijn.',
    warning: true,
  },
]

const chapterBlocks = [
  {
    number: '3.1',
    title: 'Solvabiliteit',
    icon: Shield,
    text: 'KPN is een kapitaalintensieve onderneming met een balanstotaal van EUR 12.696 miljoen. Dit past bij de telecomsector, omdat grote investeringen nodig zijn in glasvezel, 5G, cybersecurity en digitale infrastructuur. De rentedekking van 5,06 laat zien dat KPN haar rentelasten ruim uit het resultaat kan dragen. Daarmee lijkt de onderneming financieel stabiel, hoewel de hoge investeringsbehoefte zorgt voor blijvende druk op de balans.',
    source: 'Bronverwijzing: Beurs FD, bedrijfsgegevens 2025.',
  },
  {
    number: '3.2',
    title: 'Liquiditeit',
    icon: CircleDollarSign,
    text: 'De liquiditeit van KPN moet worden beoordeeld in combinatie met de stabiele kasstromen uit abonnementen en telecomdiensten. Telecombedrijven hebben vaak terugkerende inkomsten, waardoor een lagere liquiditeitsratio minder direct problematisch hoeft te zijn dan bij bedrijven met sterk wisselende inkomsten. Wel blijft het belangrijk dat KPN voldoende ruimte houdt voor investeringen en kortlopende verplichtingen.',
    source: 'Bronverwijzing: Beurs FD kerncijfers en KPN jaarverslag 2025 controleren voor definitieve liquiditeitsratio.',
  },
  {
    number: '3.3',
    title: 'Rentabiliteit',
    icon: LineChart,
    text: 'KPN behaalde in 2025 een nettowinst van EUR 855 miljoen op een omzet van EUR 5.829 miljoen. Dit komt neer op een nettowinstmarge van ongeveer 14,7%. Daarnaast tonen het rendement op eigen vermogen van 24,31% en het rendement op totale activa van 8,84% aan dat KPN haar vermogen winstgevend inzet. De adjusted EBITDA AL van EUR 2.636 miljoen en free cash flow van EUR 952 miljoen versterken het beeld van een winstgevende en kasstroomrijke onderneming.',
    source: 'Bronverwijzing: Beurs FD bedrijfsgegevens 2025 en KPN Integrated Annual Report 2025.',
  },
  {
    number: '3.4',
    title: 'Activiteitskengetallen',
    icon: BarChart3,
    text: 'De omloopsnelheid van het totale vermogen komt op basis van de FD-cijfers uit op ongeveer 0,46 keer. Dit betekent dat KPN relatief veel vermogen nodig heeft om omzet te genereren. Dat is logisch voor een telecombedrijf, omdat netwerken, zendmasten, glasvezel en IT-systemen grote investeringen vragen. De kapitaalintensiteit van KPN is daardoor hoog, maar deze infrastructuur vormt tegelijkertijd een belangrijk concurrentievoordeel.',
    source: 'Bronverwijzing: eigen berekening op basis van Beurs FD-cijfers.',
  },
]

const sourceCards = [
  {
    name: 'Beurs FD - KPN Koninklijke | Bedrijfsgegevens',
    type: 'Financiele databron / beursinformatie',
    usedFor: 'Omzet, EBITDA, nettowinst, activa, ROE, ROA, dividend en rentedekking.',
    reliability: 'Hoog, omdat Beurs FD financiele marktinformatie publiceert en bedrijfsgegevens structureel bijhoudt.',
    url: 'https://beurs.fd.nl/noteringen/11754/kpn-koninklijke',
  },
  {
    name: 'Beurs FD - KPN Koninklijke | Kerncijfers',
    type: 'Financiele databron / balans- en kengetallen',
    usedFor: 'Balansgegevens, ratios, vlottende activa, kortlopende schulden en activiteitskengetallen.',
    reliability: 'Hoog, mits cijfers worden gecontroleerd met het jaarverslag.',
    url: 'https://beurs.fd.nl/noteringen/11754/kpn-koninklijke/kerncijfers',
  },
  {
    name: 'KPN Integrated Annual Report 2025',
    type: 'Officieel jaarverslag',
    usedFor: 'Service revenues, adjusted EBITDA AL, capex, free cash flow, dividend, ROCE en strategische toelichting.',
    reliability: 'Zeer hoog, omdat dit de officiele rapportage van KPN is.',
    url: 'https://ir.kpn.com/financials/annual-reports.htm',
  },
  {
    name: 'KPN Investor Relations - jaarresultaten 2025',
    type: 'Officiele investor-relations bron',
    usedFor: 'Toelichting op jaarresultaten, groei, outlook, investeringen en strategie.',
    reliability: 'Hoog, omdat het rechtstreeks van KPN afkomstig is.',
    url: 'https://ir.kpn.com/news-and-events/press-releases.htm',
  },
  {
    name: 'Het Financieele Dagblad - artikelen over KPN',
    type: 'Journalistieke financiele bron',
    usedFor: 'Context over marge, klantbehoud, glasvezeluitrol, kwartaalprestaties en marktontwikkelingen.',
    reliability: 'Hoog als journalistieke bron. Gebruikt als journalistieke contextbron; financiele kerncijfers zijn gebaseerd op Beurs FD en KPN Annual Report.',
    url: 'https://fd.nl/zoeken?q=KPN',
  },
]

const fdContextCards = [
  'KPN stuurt op marge en behoud van klanten.',
  'KPN vertraagt glasvezeluitrol om eerst meer klanten op het netwerk te krijgen.',
  'KPN verhoogt ramingen door solide groei en meevallers.',
  'Grote bedrijven als zwakkere plek in een kwartaal van KPN.',
]

const apaSources = [
  'Het Financieele Dagblad. (2026). KPN Koninklijke | Bedrijfsgegevens. Beurs FD.',
  'Het Financieele Dagblad. (2026). KPN Koninklijke | Kerncijfers. Beurs FD.',
  'KPN. (2026). KPN Integrated Annual Report 2025. Royal KPN N.V.',
  'KPN. (2026). KPN delivered on FY 2025 outlook; fully on track to achieve mid-term ambitions. Royal KPN N.V.',
  'KPN. (2026). Shareholder Center: Dividends. Royal KPN N.V.',
]

export default function FinancialFactsKpn() {
  return (
    <section className="financial-facts-section">
      <div className="financial-intro">
        <span className="eyebrow">Hoofdstuk 3</span>
        <h2>Financiele onderbouwing KPN</h2>
        <p>Om de financiele positie van KPN te beoordelen, zijn kerncijfers gebruikt uit Beurs FD en het Integrated Annual Report 2025 van KPN. Deze cijfers geven inzicht in omzet, winstgevendheid, investeringen, kasstromen, rendement en financiele stabiliteit.</p>
      </div>

      <div className="financial-fact-grid">
        {factCards.map((fact) => (
          <article className="financial-fact-card" key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
            <small>{fact.source}</small>
          </article>
        ))}
      </div>

      <TableBlock
        title="Tabel met financiele kerncijfers"
        columns={['Onderwerp', 'Cijfer', 'Betekenis voor analyse', 'Bron']}
        rows={financialRows}
      />

      <section className="financial-subsection">
        <div className="section-title-row">
          <h3>Zelf berekende kengetallen</h3>
          <span className="status-badge">Eigen berekening</span>
        </div>
        <div className="ratio-grid">
          {ratioCards.map((ratio) => (
            <article className={ratio.warning ? 'ratio-card warning' : 'ratio-card'} key={ratio.title}>
              <span className="icon-badge">{ratio.warning ? <AlertTriangle size={20} /> : <Calculator size={20} />}</span>
              <h4>{ratio.title}</h4>
              <p><strong>Berekening:</strong> {ratio.formula}</p>
              <p><strong>Uitkomst:</strong> {ratio.outcome}</p>
              <small>{ratio.note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="financial-subsection">
        <h3>Tekstblokken voor hoofdstuk 3</h3>
        <div className="financial-chapter-grid">
          {chapterBlocks.map((block) => {
            const Icon = block.icon
            return (
              <article className="financial-chapter-card" key={block.number}>
                <span className="icon-badge"><Icon size={20} /></span>
                <h4>{block.number} {block.title}</h4>
                <p>{block.text}</p>
                <small>{block.source}</small>
              </article>
            )
          })}
        </div>
      </section>

      <section className="financial-subsection">
        <h3>FD-contextartikelen</h3>
        <p className="section-note">Deze thema's kunnen worden gebruikt als journalistieke context. Exacte financiele kerncijfers blijven gebaseerd op Beurs FD en het KPN Annual Report.</p>
        <div className="fd-context-grid">
          {fdContextCards.map((theme) => (
            <article key={theme}>
              <span className="icon-badge"><FileText size={18} /></span>
              <p>{theme}</p>
              <small>Bron: Het Financieele Dagblad, contextbron.</small>
            </article>
          ))}
        </div>
      </section>

      <section className="financial-subsection">
        <h3>Gebruikte financiele bronnen</h3>
        <div className="financial-source-grid">
          {sourceCards.map((source) => (
            <article className="financial-source-card" key={source.name}>
              <span className="icon-badge"><BookOpen size={18} /></span>
              <h4>{source.name}</h4>
              <p><strong>Type:</strong> {source.type}</p>
              <p><strong>Gebruikt voor:</strong> {source.usedFor}</p>
              <p><strong>Betrouwbaarheid:</strong> {source.reliability}</p>
              <a href={source.url} target="_blank" rel="noreferrer">Open bron</a>
            </article>
          ))}
        </div>
      </section>

      <section className="financial-subsection apa-box">
        <h3>APA-bronnenlijst financiele analyse</h3>
        <ol>
          {apaSources.map((source) => <li key={source}>{source}</li>)}
        </ol>
      </section>
    </section>
  )
}
