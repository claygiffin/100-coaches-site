import React from 'react'
import logoKnockout from '../assets/100Coaches_logo_knockout.svg'
import ContactFormLink from '../components/ContactFormLink'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer" >
        <img src={logoKnockout} alt="100 Coaches Logo" className="site-logo" />
        <div className="contact-info">
          <ContactFormLink linkText="Work With Us"/>
          <span>|</span>
          <a href="mailto:info@100coaches.com" target="_blank" rel="noopener noreferrer">info@100coaches.com</a>
          <span>|</span>
          <a href="tel:212-877-4277" target="_blank" rel="noopener noreferrer">(212) 877-4277</a>
        </div>
        <div className="copyright">© 2018 100 Coaches. All Rights Reserved.</div>
      </footer>
    )
  }
}