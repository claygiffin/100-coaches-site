import React from 'react'
import logoKnockout from '../assets/100Coaches_logo_knockout.svg'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer" >
        <img src={logoKnockout} alt="100 Coaches Logo" className="site-logo" />
        <div class="copyright">© 2018 100 Coaches. All Rights Reserved.</div>
      </footer>
    )
  }
}