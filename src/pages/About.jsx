import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { IMG } from '../data/properties.js'

export default function About() {
  const { t } = useApp()
  return (
    <div className="wrap section" style={{ paddingTop: 'clamp(40px, 6vw, 72px)' }}>
      <div className="split">
        <div className="split-img reveal" style={{ '--img': `url(${IMG.about})` }} role="img" aria-label="Patil Associate" />
        <div className="reveal">
          <div className="kicker">{t('aboutKicker')}</div>
          <h2>{t('aboutTitle')}</h2>
          <p className="lead" style={{ margin: '20px 0 0' }}>{t('aboutText')}</p>
          <div className="values">
            {[['v1t', 'v1d'], ['v2t', 'v2d'], ['v3t', 'v3d']].map(([a, b]) => (
              <div className="value" key={a}>
                <b>{t(a)}</b>
                <span>{t(b)}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/contact" className="btn btn-dark">{t('contactUs')} ↗</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
