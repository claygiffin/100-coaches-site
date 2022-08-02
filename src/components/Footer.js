import React from 'react'
import logoKnockout from '../assets/100Coaches_logo_knockout.svg'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <img src={logoKnockout} alt="100 Coaches Logo" className="site-logo" />
        <div className="contact-info">
          <a
            href="https://agency.100coaches.com/contact/"
            target="_blank"
            rel="noreferrer"
          >
            Work With Us
          </a>
          <span>|</span>
          <a href="mailto:info@100coaches.com" target="_blank" rel="noreferrer">
            info@100coaches.com
          </a>
          <span>|</span>
          <a href="tel:212-877-4277" target="_blank" rel="noreferrer">
            (212) 877-4277
          </a>
        </div>
        <div className="copyright">© 2018 100 Coaches. All Rights Reserved.</div>
      </footer>
    )
  }
}
