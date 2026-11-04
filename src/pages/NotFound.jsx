import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

export default function NotFound() {
  const { t } = useApp()
  return (
    <div className="wrap" style={{ padding: '120px 0', textAlign: 'center' }}>
      <div className="kicker">404</div>
      <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', margin: '12px 0 28px' }}>{t('page404')}</h1>
      <Link to="/" className="btn btn-dark">{t('goHome')} ↗</Link>
    </div>
  )
}
