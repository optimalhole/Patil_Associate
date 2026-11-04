import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import PropertyCard from '../components/PropertyCard.jsx'

const FILTERS = ['all', 'sale', 'rent', 'plot', 'commercial']

export default function Properties() {
  const { t, properties } = useApp()
  const [params, setParams] = useSearchParams()
  const filter = FILTERS.includes(params.get('type')) ? params.get('type') : 'all'
  const [q, setQ] = useState('')

  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    return properties.filter(
      (p) =>
        (filter === 'all' || p.type === filter) &&
        (!s || `${p.title} ${p.place} ${p.spec}`.toLowerCase().includes(s))
    )
  }, [properties, filter, q])

  return (
    <div className="wrap" style={{ paddingBottom: 96 }}>
      <div className="page-head">
        <div className="kicker">{t('featuredKicker')}</div>
        <h1>{t('propertiesTitle')}</h1>
        <p className="lead">{t('propertiesText')}</p>
      </div>

      <div className="toolbar">
        <input
          className="search"
          type="search"
          placeholder={t('search')}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label={t('search')}
        />
        <div className="chips">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`chip ${filter === f ? 'active' : ''}`}
              onClick={() => setParams(f === 'all' ? {} : { type: f })}
            >
              {t(f)}
            </button>
          ))}
        </div>
      </div>

      {list.length ? (
        <div className="grid">
          {list.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      ) : (
        <p className="empty">{t('noResults')}</p>
      )}
    </div>
  )
}
