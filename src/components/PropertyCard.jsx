import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function PropertyCard({ p }) {
  const { t } = useApp()
  return (
    <Link to={`/properties/${p.id}`} className="card reveal">
      <div className="card-img">
        <img src={p.img} alt={p.title} loading="lazy" />
        <span className="tag">{t(p.type)}</span>
      </div>
      <div className="card-body">
        <h3>{p.title}</h3>
        <div className="card-loc">⌖ {p.place}</div>
        <div className="card-meta">
          <span>{p.spec}</span>
          <span className="price">{p.price}</span>
        </div>
      </div>
    </Link>
  )
}
