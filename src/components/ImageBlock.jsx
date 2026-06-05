import { Image } from 'lucide-react'

export default function ImageBlock({ title, caption, src }) {
  return (
    <figure className="image-block">
      {src ? <img src={src} alt={title} /> : <div className="image-placeholder"><Image size={28} /> Grafiek of afbeelding</div>}
      <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
    </figure>
  )
}
