import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { TYPES } from '../data/properties.js'

const blankProp = { title: '', place: '', type: 'sale', price: '', spec: '', img: '' }
const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'

export default function Admin() {
  const {
    t, isAdmin, adminLogout, properties, addProperty, deleteProperty,
    videos, addVideo, deleteVideo, showToast,
  } = useApp()
  const nav = useNavigate()
  const [p, setP] = useState(blankProp)
  const [v, setV] = useState({ title: '', url: '' })

  if (!isAdmin) return <Navigate to="/login" replace />

  const submitProp = (e) => {
    e.preventDefault()
    addProperty({
      title: p.title.trim(),
      place: p.place.trim() || '—',
      type: p.type,
      price: p.price.trim() || 'On request',
      spec: p.spec.trim() || '—',
      img: p.img.trim() || FALLBACK_IMG,
    })
    setP(blankProp)
    showToast(t('added'))
  }

  const submitVideo = (e) => {
    e.preventDefault()
    addVideo({ title: v.title.trim(), url: v.url.trim(), poster: FALLBACK_IMG })
    setV({ title: '', url: '' })
    showToast(t('added'))
  }

  const setPf = (k) => (e) => setP((x) => ({ ...x, [k]: e.target.value }))

  return (
    <div className="wrap" style={{ paddingBottom: 96 }}>
      <div className="page-head admin-head">
        <div>
          <div className="kicker">PATIL ASSOCIATE / CMS</div>
          <h1>{t('adminTitle')}</h1>
        </div>
        <button className="btn" onClick={() => { adminLogout(); nav('/') }}>{t('logout')}</button>
      </div>

      <div className="admin-grid">
        <section className="panel">
          <h3>{t('addProperty')}</h3>
          <form className="form" onSubmit={submitProp} style={{ marginTop: 18 }}>
            <div className="field">
              <label>{t('titleLbl')}</label>
              <input required value={p.title} onChange={setPf('title')} />
            </div>
            <div className="row2">
              <div className="field">
                <label>{t('placeLbl')}</label>
                <input value={p.place} onChange={setPf('place')} />
              </div>
              <div className="field">
                <label>{t('typeLbl')}</label>
                <select value={p.type} onChange={setPf('type')}>
                  {TYPES.map((x) => <option key={x} value={x}>{t(x)}</option>)}
                </select>
              </div>
            </div>
            <div className="row2">
              <div className="field">
                <label>{t('priceLbl')}</label>
                <input value={p.price} onChange={setPf('price')} />
              </div>
              <div className="field">
                <label>{t('specLbl')}</label>
                <input value={p.spec} onChange={setPf('spec')} />
              </div>
            </div>
            <div className="field">
              <label>{t('imgLbl')}</label>
              <input type="url" placeholder="https://…" value={p.img} onChange={setPf('img')} />
            </div>
            <button className="btn btn-dark" type="submit">{t('add')} +</button>
          </form>

          <div className="admin-list">
            <h3>{t('current')}</h3>
            {properties.map((x) => (
              <div className="admin-row" key={x.id}>
                <span>{x.title}</span>
                <button className="btn btn-sm" onClick={() => deleteProperty(x.id)}>{t('del')}</button>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <h3>{t('addVideo')}</h3>
          <form className="form" onSubmit={submitVideo} style={{ marginTop: 18 }}>
            <div className="field">
              <label>{t('titleLbl')}</label>
              <input required value={v.title} onChange={(e) => setV({ ...v, title: e.target.value })} />
            </div>
            <div className="field">
              <label>{t('videoUrlLbl')}</label>
              <input required type="url" placeholder="https://…/video.mp4" value={v.url} onChange={(e) => setV({ ...v, url: e.target.value })} />
            </div>
            <button className="btn btn-dark" type="submit">{t('add')} +</button>
          </form>

          <div className="admin-list">
            <h3>{t('currentVideos')}</h3>
            {videos.map((x) => (
              <div className="admin-row" key={x.id}>
                <span>{x.title}</span>
                <button className="btn btn-sm" onClick={() => deleteVideo(x.id)}>{t('del')}</button>
              </div>
            ))}
          </div>
          <p className="note">{t('adminNote')}</p>
        </section>
      </div>
    </div>
  )
}
