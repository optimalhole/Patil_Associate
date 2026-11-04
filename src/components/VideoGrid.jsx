import { useApp } from '../context/AppContext.jsx'

export default function VideoGrid({ items }) {
  const { t } = useApp()
  return (
    <div className="videos">
      {items.map((v) =>
        v.url ? (
          <div className="video reveal" key={v.id}>
            <video controls playsInline preload="metadata" src={v.url} poster={v.poster || undefined} />
            <div className="video-title">{v.title}</div>
          </div>
        ) : (
          <div className="video reveal" key={v.id}>
            <div className="video-ph" style={{ '--poster': `url(${v.poster})` }}>
              <div className="video-cap">
                {v.title}
                <small>{t('videoSoon')}</small>
              </div>
            </div>
            <div className="play" aria-hidden="true">▶</div>
          </div>
        )
      )}
    </div>
  )
}
