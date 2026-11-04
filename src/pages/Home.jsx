import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { IMG } from '../data/properties.js'
import PropertyCard from '../components/PropertyCard.jsx'
import VideoGrid from '../components/VideoGrid.jsx'

export default function Home() {
  const { t, properties, videos } = useApp()
  const services = [
    ['s1t', 's1d'],
    ['s2t', 's2d'],
    ['s3t', 's3d'],
    ['s4t', 's4d'],
  ]

  return (
    <>
      <section className="hero" style={{ '--hero': `url(${IMG.hero})` }}>
        <div className="wrap hero-inner">
          <div className="eyebrow">{t('heroEyebrow')}</div>
          <h1>
            {t('heroTitle1')} <em>{t('heroTitle2')}</em> {t('heroTitle3')}
          </h1>
          <p>{t('heroText')}</p>
          <div className="hero-actions">
            <Link to="/properties" className="btn btn-light">{t('explore')} ↗</Link>
            <Link to="/contact" className="btn btn-ghost-light">{t('contactUs')}</Link>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-head">
          <div>
            <div className="kicker">{t('featuredKicker')}</div>
            <h2>{t('featuredTitle')}</h2>
          </div>
          <p className="lead">{t('featuredText')}</p>
        </div>
        <div className="grid">
          {properties.slice(0, 3).map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/properties" className="btn">{t('viewAll')} ↗</Link>
        </div>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <div>
            <div className="kicker">{t('servicesKicker')}</div>
            <h2>{t('servicesTitle')}</h2>
          </div>
        </div>
        <div className="services">
          {services.map(([a, b], i) => (
            <div className="service reveal" key={a}>
              <span className="num">0{i + 1}</span>
              <h3>{t(a)}</h3>
              <p>{t(b)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">{t('videosKicker')}</div>
              <h2>{t('videosTitle')}</h2>
            </div>
            <Link to="/videos" className="btn btn-ghost-light">{t('navVideos')} ↗</Link>
          </div>
          <VideoGrid items={videos.slice(0, 3)} />
        </div>
      </section>

      <section className="section cta" style={{ '--cta': `url(${IMG.cta})` }}>
        <div className="wrap">
          <h2>{t('ctaTitle')}</h2>
          <p>{t('ctaText')}</p>
          <Link to="/contact" className="btn btn-light">{t('contactUs')} ↗</Link>
        </div>
      </section>
    </>
  )
}
