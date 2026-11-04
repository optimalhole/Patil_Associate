import { Link, useParams } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function PropertyDetail() {
  const { id } = useParams()
  const { t, properties } = useApp()
  const p = properties.find((x) => String(x.id) === id)

  if (!p) {
    return (
      <div className="wrap" style={{ padding: '96px 0', textAlign: 'center' }}>
        <p className="lead" style={{ margin: '0 auto 24px' }}>{t('notFound')}</p>
        <Link to="/properties" className="btn">← {t('navProperties')}</Link>
      </div>
    )
  }

  return (
    <div className="wrap">
      <Link to="/properties" className="back">← {t('back')}</Link>
      <div className="detail">
        <div className="detail-img">
          <img src={p.img} alt={p.title} />
        </div>
        <aside className="detail-side">
          <div className="kicker">{t(p.type)}</div>
          <h1>{p.title}</h1>
          <div className="card-loc">⌖ {p.place}</div>
          <div className="detail-price">{p.price}</div>
          <div className="facts">
            <div><span>{t('location')}</span><span>{p.place}</span></div>
            <div><span>{t('details')}</span><span>{p.spec}</span></div>
            <div><span>{t('typeLbl')}</span><span>{t(p.type)}</span></div>
          </div>
          <Link to="/contact" className="btn btn-dark btn-block">{t('enquire')} ↗</Link>
        </aside>
      </div>
    </div>
  )
}
