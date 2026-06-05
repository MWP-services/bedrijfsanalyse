export default function SourceList({ category, items }) {
  return (
    <section className="source-list">
      <h2>{category}</h2>
      <div className="source-items">
        {items.map((item) => (
          <article key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.note}</p>
            <a href={item.url} target="_blank" rel="noreferrer">{item.url}</a>
          </article>
        ))}
      </div>
    </section>
  )
}
