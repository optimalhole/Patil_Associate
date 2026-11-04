import { useState } from 'react'
import { useApp } from '../context/AppContext.jsx'

export default function EnquiryForm({ subject = '' }) {
  const { t, showToast } = useApp()
  const [form, setForm] = useState({ name: '', phone: '', topic: 'iBuy', message: subject })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    // TODO: send `form` to your backend (Firebase, Formspree, etc.)
    showToast(t('thanks'))
    setForm({ name: '', phone: '', topic: 'iBuy', message: '' })
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="field">
        <label htmlFor="f-name">{t('name')}</label>
        <input id="f-name" required value={form.name} onChange={set('name')} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="f-phone">{t('phone')}</label>
        <input id="f-phone" required type="tel" inputMode="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="f-topic">&nbsp;</label>
        <select id="f-topic" value={form.topic} onChange={set('topic')}>
          {['iBuy', 'iRent', 'iSell', 'iOther'].map((k) => (
            <option key={k} value={k}>{t(k)}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-msg">{t('message')}</label>
        <textarea id="f-msg" value={form.message} onChange={set('message')} />
      </div>
      <button className="btn btn-dark btn-block" type="submit">{t('send')} ↗</button>
      <p className="note">{t('demoNote')}</p>
    </form>
  )
}
