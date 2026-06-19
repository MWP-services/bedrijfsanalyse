import vergelijkingImage from '../assets/vergelijking.png'
import InteractiveInfographicCard from './InteractiveInfographicCard.jsx'
import './SustainabilityInfographicSection.css'

// Pas top, left, width en height aan om de klikvlakken precies op de afbeelding te leggen.
const vergelijkingItems = [
  {
    id: 'vergelijking-vodafoneziggo',
    title: 'Vergelijking met VodafoneZiggo',
    description: 'VodafoneZiggo investeert net als KPN in CO2-reductie, circulariteit en digitale inclusie. Het verschil is dat KPN duurzaamheid sterker koppelt aan haar kernactiviteiten, zoals glasvezel, 5G en energie-efficiente netwerken.',
    bullets: [
      'VodafoneZiggo richt zich op CO2-reductie, circulariteit en digitale inclusie.',
      'KPN koppelt duurzaamheid direct aan haar telecomactiviteiten.',
      'Glasvezel, 5G en energie-efficiente netwerken spelen een centrale rol.',
      'KPN rapporteert uitgebreid over meetbare KPIs.',
      'Daardoor is de voortgang transparanter en beter te beoordelen.',
    ],
    conclusion: 'KPN onderscheidt zich doordat duurzaamheid niet losstaat van de strategie, maar verbonden is met de kern van het bedrijf.',
    hotspot: { top: '30%', left: '5%', width: '28%', height: '46%' },
  },
  {
    id: 'bedrijfsvoering',
    title: 'Relatie met de bedrijfsvoering',
    description: 'De duurzaamheidsdoelen van KPN zijn direct verbonden met de dagelijkse operatie. Investeringen in digitale infrastructuur, energiebesparing en circulaire apparatuur maken onderdeel uit van de bedrijfsvoering.',
    bullets: [
      'Duurzaamheid is gekoppeld aan digitale infrastructuur.',
      'KPN investeert in energiezuinige netwerken.',
      'Circulaire apparatuur draagt bij aan minder verspilling.',
      'De SDGs zijn geintegreerd in de bedrijfsvoering.',
      'Duurzaamheid ondersteunt zowel de strategie als de operatie.',
    ],
    conclusion: 'Bij KPN is duurzaamheid geen los project, maar onderdeel van hoe het bedrijf dagelijks werkt.',
    hotspot: { top: '30%', left: '36%', width: '28%', height: '46%' },
  },
  {
    id: 'greenwashing',
    title: 'Greenwashing-beoordeling',
    description: 'Er zijn weinig aanwijzingen voor greenwashing, omdat KPN haar duurzaamheidsclaims onderbouwt met concrete KPIs en rapporteert volgens CSRD-richtlijnen. Wel blijft Scope 3-uitstoot een belangrijk aandachtspunt.',
    bullets: [
      'KPN gebruikt concrete KPIs om duurzaamheid te meten.',
      'De rapportage volgens CSRD-richtlijnen vergroot de transparantie.',
      'De duurzaamheidsclaims zijn daardoor beter controleerbaar.',
      'Scope 3-uitstoot blijft een risico en aandachtspunt.',
      'Deze uitstoot is sterk afhankelijk van leveranciers en partners.',
    ],
    conclusion: 'KPN lijkt duurzaamheid serieus te integreren, maar moet vooral in de keten blijven werken aan verdere uitstootreductie.',
    hotspot: { top: '30%', left: '67%', width: '28%', height: '46%' },
  },
]

export default function SustainabilityInfographicSection() {
  return (
    <section className="sustainability-infographic-section">
      <div className="section-title-row">
        <h3>Interactieve infographic: duurzaamheid en greenwashing</h3>
        <span className="status-badge">Interactief bij vergroten</span>
      </div>
      <InteractiveInfographicCard
        title="Duurzaamheid KPN"
        subtitle="Vergelijking, bedrijfsvoering en greenwashing"
        type="image"
        image={vergelijkingImage}
        items={vergelijkingItems}
        previewText="Vergroot de infographic om op onderdelen te klikken."
        buttonText="Vergroot interactieve infographic"
      />
    </section>
  )
}
