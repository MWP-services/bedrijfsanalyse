import SectionHeader from '../components/SectionHeader.jsx'
import SourceList from '../components/SourceList.jsx'
import { sourceCategories } from '../data/sources.js'

export default function Sources() {
  return (
    <section className="page-section">
      <SectionHeader eyebrow="Verantwoording" title="Bronnen" text="Houd bronvermelding centraal en groepeer bronnen per categorie." />
      <div className="sources-layout">{sourceCategories.map((group) => <SourceList key={group.category} {...group} />)}</div>
    </section>
  )
}
