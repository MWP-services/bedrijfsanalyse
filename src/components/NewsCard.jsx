export default function NewsCard({ item }) {
  return (
    <article className="news-card">
      <div className="card-meta">
        <span>{item.category}</span>
        <time>{item.date}</time>
      </div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <div className="news-detail">
        <strong>Eigen commentaar</strong>
        <p>{item.commentary}</p>
      </div>
      <div className="news-detail">
        <strong>Relevantie</strong>
        <p>{item.relevance}</p>
      </div>
      <a href={item.url} target="_blank" rel="noreferrer">Bron: {item.source}</a>
    </article>
  )
}
