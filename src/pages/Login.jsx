import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'

// Single sign-in page. Admin credentials open the dashboard; other
// credentials are a demo customer login (wire up Firebase Auth for real accounts).
export default function Login() {
  const { t, adminLogin, showToast } = useApp()
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (adminLogin(email.trim(), pass)) {
      nav('/admin')
    } else {
      showToast(t('loginNote'))
    }
  }

  return (
    <div className="narrow panel">
      <div className="kicker">PATIL ASSOCIATE</div>
      <h1>{t('welcome')}</h1>
      <form className="form" onSubmit={submit}>
        <div className="field">
          <label htmlFor="l-email">{t('email')}</label>
          <input id="l-email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" />
        </div>
        <div className="field">
          <label htmlFor="l-pass">{t('password')}</label>
          <input id="l-pass" required type="password" value={pass} onChange={(e) => setPass(e.target.value)} autoComplete="current-password" />
        </div>
        <button className="btn btn-dark btn-block" type="submit">{t('signIn')} ↗</button>
        <p className="note">{t('loginNote')}</p>
      </form>
    </div>
  )
}
