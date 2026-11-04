import { useApp } from '../context/AppContext.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'

export default function Contact() {
  const { t } = useApp()
  return (
    <div className="wrap" style={{ paddingBottom: 96 }}>
      <div className="contact-grid page-head">
        <div>
          <div className="kicker">{t('contactKicker')}</div>
          <h1>{t('contactTitle')}</h1>
          <p className="lead">{t('contactText')}</p>
          <div className="contact-info">
            <div><small>Phone</small>+91 XXXXX XXXXX</div>
            <div><small>Email</small>hello@patilassociate.in</div>
            <div><small>Office</small>Maharashtra, India</div>
          </div>
        </div>
        <div className="panel">
          <EnquiryForm />
        </div>
      </div>
    </div>
  )
}
