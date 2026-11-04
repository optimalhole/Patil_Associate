import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { Brand } from './Layout.jsx'

export default function Footer() {
  const { t } = useApp()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Brand />
            <p>{t('aboutText')}</p>
          </div>
          <div>
            <h4>Menu</h4>
            <ul>
              <li><Link to="/properties">{t('navProperties')}</Link></li>
              <li><Link to="/about">{t('navAbout')}</Link></li>
              <li><Link to="/videos">{t('navVideos')}</Link></li>
              <li><Link to="/contact">{t('navContact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t('navContact')}</h4>
            <ul>
              <li>Phone: +91 XXXXX XXXXX</li>
              <li>hello@patilassociate.in</li>
              <li>Maharashtra, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PATIL ASSOCIATE. {t('rights')}</span>
          <span>BUY • SELL • RENT</span>
        </div>
      </div>
    </footer>
  )
}
