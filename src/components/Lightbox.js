import React from 'react'
import logoDefault from '../assets/100Coaches_logo.svg'

export class Lightbox extends React.Component {

  render(){
    return (
      <div className={`lightbox ${this.props.className}`} >
        <div className="lightbox-wrapper" >
          <div className="wrapper-inner">
            <div className="lightbox-container">
              <nav>
                <img className="site-logo" src={logoDefault} alt="100 Coaches" />
                <div className="close-button" onClick={this.props.onClose}></div>
              </nav>
              <div className="lightbox-content">
                {this.props.openState && this.props.children }        
              </div>
            </div>
              <div className="lightbox-bg" onClick={this.props.onClose}></div>
            </div>
          </div>
      </div>
    )
  }
}

export default Lightbox