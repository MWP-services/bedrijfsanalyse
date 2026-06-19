import { AlertTriangle, BarChart3, Building2, RadioTower, Shield, Users } from 'lucide-react'
import './ChapterTwoBrancheAnalyse.css'

const porterForces = [
  {
    title: 'Concurrentie in de markt',
    level: 'Hoog',
    icon: BarChart3,
    text: 'KPN concurreert met VodafoneZiggo, Odido en Delta Fiber op prijs, netwerkkwaliteit, snelheid en klantenservice.',
  },
  {
    title: 'Dreiging van nieuwe toetreders',
    level: 'Laag',
    icon: Building2,
    text: 'Nieuwe toetreders moeten zeer grote investeringen doen in infrastructuur, vergunningen en technologie.',
  },
  {
    title: 'Macht van klanten',
    level: 'Hoog',
    icon: Users,
    text: 'Consumenten kunnen eenvoudig overstappen en gebruiken vaak vergelijkingssites.',
  },
  {
    title: 'Macht van leveranciers',
    level: 'Gemiddeld',
    icon: Shield,
    text: 'KPN is afhankelijk van grote technologiebedrijven zoals Ericsson, Nokia en Cisco.',
  },
  {
    title: 'Dreiging van substituten',
    level: 'Toenemend',
    icon: RadioTower,
    text: 'Diensten zoals Microsoft Teams, WhatsApp en Zoom vervangen steeds vaker traditionele telecomdiensten.',
  },
]

const swotItems = [
  {
    title: 'Sterktes',
    items: ['Sterke merkbekendheid', 'Groot glasvezelnetwerk', 'Landelijke 5G-dekking', 'Stabiele klantbasis'],
  },
  {
    title: 'Zwaktes',
    items: ['Hoge investeringskosten', 'Afhankelijkheid van technische infrastructuur', 'Druk op klantbehoud', 'Complexe telecomregelgeving'],
  },
  {
    title: 'Kansen',
    items: ['Groei in glasvezel', 'Meer vraag naar cybersecurity', 'Digitalisering van bedrijven', 'Duurzame netwerken'],
  },
  {
    title: 'Bedreigingen',
    items: ['Sterke concurrentie', 'Prijsdruk', 'Substituten zoals Teams, WhatsApp en Zoom', 'Afhankelijkheid van leveranciers'],
  },
]

export default function ChapterTwoBrancheAnalyse() {
  return (
    <section className="branche-analysis-section">
      <div className="branche-analysis-header">
        <span className="eyebrow">2.1 Brancheanalyse</span>
        <h3>Brancheanalyse</h3>
        <p>Voor de brancheanalyse is gekozen voor de Nederlandse telecomsector, waarin KPN actief is als aanbieder van mobiele en vaste telecomdiensten, internet, glasvezel, 5G en zakelijke digitale diensten. De analyse wordt uitgewerkt aan de hand van het Vijfkrachtenmodel van Porter.</p>
      </div>

      <article className="branche-context-card">
        <span className="icon-badge"><AlertTriangle size={20} /></span>
        <h4>Opdrachtcontext</h4>
        <p>Het doel van deze analyse is om een specifieke branche waarin KPN actief is te onderzoeken. Voor KPN is gekozen voor de telecomsector, omdat deze sector direct aansluit op de kernactiviteiten van het bedrijf. Daarbij wordt gekeken naar concurrentiedruk, toetredingsdrempels, klantmacht, leveranciersmacht en substituten.</p>
      </article>

      <section className="branche-subsection">
        <h3>Vijfkrachtenmodel van Porter</h3>
        <div className="porter-force-grid">
          {porterForces.map((force) => {
            const Icon = force.icon
            return (
              <article className="porter-force-card" key={force.title}>
                <span className="icon-badge"><Icon size={20} /></span>
                <strong>{force.title}</strong>
                <small>{force.level}</small>
                <p>{force.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="branche-text-block">
        <p>Uit de brancheanalyse volgens het Vijfkrachtenmodel van Porter blijkt dat KPN opereert in een sterk concurrerende telecomsector. De concurrentiedruk is hoog doordat grote aanbieders zoals VodafoneZiggo, Odido en Delta Fiber voortdurend concurreren op prijs, netwerkkwaliteit, snelheid en klantenservice. Tegelijkertijd zijn de toetredingsdrempels voor nieuwe aanbieders hoog vanwege de grote investeringen die nodig zijn voor infrastructuur, vergunningen en technologie. Hierdoor blijft de dreiging van nieuwe toetreders relatief beperkt.</p>
        <p>De onderhandelingsmacht van klanten is daarentegen groot. Consumenten kunnen eenvoudig overstappen naar een andere aanbieder en maken veel gebruik van vergelijkingssites. Hierdoor moet KPN blijven investeren in klanttevredenheid, service en innovatie. De macht van leveranciers is gemiddeld, omdat KPN afhankelijk is van een beperkt aantal grote technologiebedrijven zoals Ericsson, Nokia en Cisco voor netwerkapparatuur en software.</p>
        <p>Daarnaast neemt de dreiging van substituten toe. Diensten zoals Microsoft Teams, WhatsApp en Zoom vervangen steeds vaker traditionele telecomdiensten. Hierdoor verschuift de focus van telecombedrijven van enkel connectiviteit naar een breder aanbod van digitale diensten en oplossingen.</p>
        <p>Ondanks deze uitdagingen beschikt KPN over belangrijke concurrentievoordelen. Het bedrijf heeft een sterke marktpositie dankzij de omvangrijke glasvezeluitrol, een landelijke 5G-dekking van 98% en voortdurende investeringen in innovatie en duurzaamheid. Uit het jaarverslag blijkt bovendien dat 63% van de Nederlandse huishoudens inmiddels toegang heeft tot het glasvezelnetwerk van KPN en Glaspoort. Daarnaast behaalde KPN in 2024 een recycling- en hergebruikpercentage van 88% en streeft het bedrijf naar een net-zero uitstoot in 2040.</p>
      </section>

      <div className="report-conclusion branche-conclusion">
        <h3>Conclusie brancheanalyse</h3>
        <p>KPN is actief in een aantrekkelijke maar zeer competitieve markt. De grootste uitdagingen liggen bij het behouden van klanten, het onderscheiden van concurrenten en het verder verduurzamen van de keten. Tegelijkertijd geven de sterke infrastructuur, merkbekendheid en investeringen in innovatie KPN een goede uitgangspositie om haar marktpositie te behouden.</p>
      </div>

      <section className="branche-subsection">
        <h3>SWOT-analyse</h3>
        <div className="branche-swot-grid">
          {swotItems.map((group) => (
            <article key={group.title}>
              <h4>{group.title}</h4>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="branche-source-note">
        <h3>Bronnen en controle</h3>
        <p>De brancheanalyse is gebaseerd op het Vijfkrachtenmodel van Porter en beschikbare informatie over de Nederlandse telecomsector. Controleer cijfers over glasvezel, 5G en duurzaamheid met het meest recente jaarverslag van KPN voordat deze definitief worden gebruikt.</p>
      </section>
    </section>
  )
}
