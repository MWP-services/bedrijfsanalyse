import { Maximize2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import './InteractiveInfographicCard.css'

export default function InteractiveInfographicCard({
  title,
  subtitle,
  type,
  image,
  items,
  labelText = 'Interactief bij vergroten',
  previewText = 'Vergroot de infographic om op onderdelen te klikken.',
  buttonText = 'Vergroot interactieve infographic',
  renderContent,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(null)
  const fallbackItem = useMemo(() => items?.[0] || null, [items])
  const selectedItem = activeItem

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const openModal = () => {
    setActiveItem(fallbackItem)
    setIsOpen(true)
  }

  return (
    <>
      <article className="infographic-preview-card">
        <div className="infographic-preview-media">
          {type === 'image' && <img src={image} alt={title} />}
          {type === 'custom' && renderContent?.({ preview: true, activeItem: null, onSelect: null })}
        </div>
        <div className="infographic-preview-body">
          <span>{labelText}</span>
          <h4>{title}</h4>
          <p>{subtitle}</p>
          <small>{previewText}</small>
          <button className="btn primary infographic-open-button" type="button" onClick={openModal}>
            <Maximize2 size={17} /> {buttonText}
          </button>
        </div>
      </article>

      {isOpen && (
        <div
          className="infographic-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false)
          }}
        >
          <section className="infographic-modal" role="dialog" aria-modal="true" aria-labelledby={`modal-${title}`}>
            <div className="infographic-modal-header">
              <div>
                <span>Interactief bij vergroten</span>
                <h2 id={`modal-${title}`}>{title}</h2>
                <p>Klik op een onderdeel voor meer informatie.</p>
              </div>
              <button className="infographic-modal-close" type="button" onClick={() => setIsOpen(false)} aria-label="Infographic sluiten">
                &times;
              </button>
            </div>

            <div className="infographic-modal-layout">
              <div className="infographic-modal-visual">
                {type === 'image' && (
                  <div className="infographic-image-stage">
                    <img src={image} alt={title} />
                    {items.map((item) => (
                      <button
                        className={selectedItem?.id === item.id ? 'infographic-hotspot active' : 'infographic-hotspot'}
                        key={item.id}
                        style={item.hotspot}
                        type="button"
                        onClick={() => setActiveItem(item)}
                        aria-label={`Open uitleg over ${item.title}`}
                      >
                        <span>{item.title}</span>
                      </button>
                    ))}
                  </div>
                )}
                {type === 'custom' && renderContent?.({
                  preview: false,
                  activeItem: selectedItem,
                  onSelect: setActiveItem,
                })}
              </div>

              <aside className="infographic-info-panel">
                {selectedItem ? (
                  <>
                    <button className="infographic-info-close" type="button" onClick={() => setActiveItem(null)} aria-label="Informatiepaneel sluiten">
                      &times;
                    </button>
                    <h3>{selectedItem.title}</h3>
                    <p>{selectedItem.description}</p>
                    <ul>
                      {selectedItem.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                    {selectedItem.conclusion && <p className="infographic-conclusion"><strong>Conclusie:</strong> {selectedItem.conclusion}</p>}
                  </>
                ) : (
                  <p>Klik op een onderdeel in de infographic om de uitleg te bekijken.</p>
                )}
              </aside>
            </div>
          </section>
        </div>
      )}
    </>
  )
}
