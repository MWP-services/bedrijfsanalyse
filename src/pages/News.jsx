import { useMemo, useState } from 'react'
import NewsCard from '../components/NewsCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { newsItems } from '../data/news.js'

export default function News() {
  const [category, setCategory] = useState('alle')
  const categories = ['alle', ...new Set(newsItems.map((item) => item.category))]
  const filtered = useMemo(() => category === 'alle' ? newsItems : newsItems.filter((item) => item.category === category), [category])

  return (
    <section className="page-section">
      <SectionHeader eyebrow="Nieuwsfeiten" title="Nieuws & Actualiteit" text="Beheer nieuwsitems in src/data/news.js en geef elk item een categorie, bron en eigen commentaar." />
      <div className="filter-row">{categories.map((item) => <button className={item === category ? 'active' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <div className="news-grid">{filtered.map((item) => <NewsCard key={item.title} item={item} />)}</div>
    </section>
  )
}
