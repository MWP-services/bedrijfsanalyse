import { BadgeCheck, LineChart, TrendingUp } from 'lucide-react'
import ImageBlock from '../components/ImageBlock.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const sections = ['Samenvatting advies KPN', 'Korte termijn advies', 'Lange termijn advies', 'Onderbouwing vanuit financiele analyse', 'Onderbouwing vanuit risicoanalyse', 'Vergelijking met telecomconcurrent', 'Eindconclusie']

export default function InvestmentAdvice() {
  return (
    <section className="page-section">
      <SectionHeader eyebrow="KPN-advies" title="Beleggingsadvies KPN" text="Formuleer een professioneel buy, hold of sell advies voor KPN zonder ongefundeerde conclusies." />
      <article className="advice-card">
        <span><BadgeCheck size={22} /> Conceptadvies KPN</span>
        <h2>Advies KPN: HOLD / BUY / SELL</h2>
        <p>Vul hier de kern van het KPN-advies in, inclusief belangrijkste argumenten, ratio&apos;s, risico&apos;s en onzekerheden.</p>
      </article>
      <div className="info-grid">{sections.map((section) => <article className="info-card" key={section}><h2>{section}</h2><p>Vul hier de KPN-specifieke onderbouwing in.</p></article>)}</div>
      <div className="placeholder-grid">
        <ImageBlock title="Koers- of waarderingsgrafiek KPN" caption="Plaats hier later een grafiek." />
        <ImageBlock title="Concurrentievergelijking telecom" caption="Plaats hier later een benchmark." />
      </div>
      <div className="badge-row"><span><TrendingUp size={16} /> Waardering KPN</span><span><LineChart size={16} /> Ratio&apos;s</span><span>Risico KPN: invullen</span></div>
    </section>
  )
}
