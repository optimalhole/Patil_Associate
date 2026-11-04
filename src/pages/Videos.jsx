import { useApp } from '../context/AppContext.jsx'
import VideoGrid from '../components/VideoGrid.jsx'

export default function Videos() {
  const { t, videos } = useApp()
  return (
    <div className="dark-band" style={{ minHeight: '70vh' }}>
      <div className="wrap" style={{ paddingBottom: 96 }}>
        <div className="page-head">
          <div className="kicker">{t('videosKicker')}</div>
          <h1>{t('videosTitle')}</h1>
          <p className="lead">{t('videosText')}</p>
        </div>
        <VideoGrid items={videos} />
      </div>
    </div>
  )
}
