import { ArrowRight, BarChart3, Building2, LineChart, Shield, Target, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnalysisCard from '../components/AnalysisCard.jsx'
import NewsCard from '../components/NewsCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import StatCard from '../components/StatCard.jsx'
import { newsItems } from '../data/news.js'

const cards = [
  { title: 'KPN-profiel', text: 'Wie is KPN en hoe verdient het bedrijf geld met telecom, internet en digitale diensten?', icon: Building2, to: '/over-de-onderneming' },
  { title: 'Telecombranche', text: 'Analyse van de Nederlandse telecommarkt, concurrentie, regulering en glasvezelontwikkelingen.', icon: Target, to: '/analyse' },
  { title: 'Financiele analyse', text: 'KPN-ratio\'s voor solvabiliteit, liquiditeit, rentabiliteit en beleggingswaarde.', icon: BarChart3, to: '/analyse' },
  { title: 'Risicoanalyse', text: 'Commerciele, operationele en financiele risico\'s voor KPN professioneel beoordeeld.', icon: Shield, to: '/risicoanalyse' },
  { title: 'SWOT KPN', text: 'KPN\'s sterktes, zwaktes, kansen en bedreigingen met onderbouwing.', icon: LineChart, to: '/swot' },
  { title: 'Beleggingsadvies KPN', text: 'Een helder buy, hold of sell advies voor KPN op basis van de analyse.', icon: TrendingUp, to: '/beleggingsadvies' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Bedrijfskunde 2025-2026</span>
          <h1>Integrale Bedrijfsanalyse KPN</h1>
          <p>Professionele analyse van KPN</p>
          <p className="hero-copy">Deze website presenteert KPN als Nederlandse telecom- en digitale infrastructuuronderneming. De analyse verbindt strategie, duurzaamheid, brancheontwikkelingen, financiele ratio&apos;s, risico&apos;s, SWOT en beleggingsadvies.</p>
          <div className="button-row">
            <Link className="btn primary" to="/uitgewerkte-opdrachten">Uitgewerkte opdrachten <ArrowRight size={18} /></Link>
            <Link className="btn secondary" to="/beleggingsadvies">Beleggingsadvies</Link>
          </div>
        </div>
        <div className="hero-panel">
          <StatCard label="Focus" value="360 graden" text="Strategie, cijfers, risico en actualiteit rond KPN in een overzicht." />
          <StatCard label="Onderneming" value="KPN" text="Nederlandse aanbieder van telecomnetwerken, internet, mobiele diensten en digitale infrastructuur." />
        </div>
      </section>

      <section className="page-section">
        <SectionHeader eyebrow="KPN-analyse" title="Overzicht van de belangrijkste onderdelen" text="Gebruik deze kaarten als startpunt voor de kernhoofdstukken van de bedrijfsanalyse over KPN." />
        <div className="card-grid">{cards.map((card) => <AnalysisCard key={card.title} {...card} />)}</div>
      </section>

      <section className="page-section muted">
        <SectionHeader eyebrow="Actualiteit" title="Laatste KPN-nieuws" text="Nieuwsfeiten met bronvermelding, eigen commentaar en relevantie voor KPN." />
        <div className="news-grid">{newsItems.slice(0, 2).map((item) => <NewsCard key={item.title} item={item} />)}</div>
      </section>
    </>
  )
}
