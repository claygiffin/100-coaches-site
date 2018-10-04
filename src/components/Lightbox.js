import React from 'react'
import {Portal} from 'react-portal';
import logoDefault from '../assets/100Coaches_logo.svg'

export class Lightbox extends React.Component {


  render(){
    return (
      <>
        {this.props.isOpen && (
          <Portal>
            <div className={`lightbox ${this.props.className}`} >
                <div className="lightbox-wrapper" >
                <div className="wrapper-inner">
                  <div className="lightbox-container">
                    <nav>
                      <img className="site-logo" src={logoDefault} alt="100 Coaches" />
                      <div className="close-button" onClick={this.props.onClose}></div>
                    </nav>
                    <div className="lightbox-content">
                      { this.props.children }        
                    </div>
                  </div>
                    <div className="lightbox-bg" onClick={this.props.onClose}></div>
                  </div>
                </div>
            </div>
          </Portal>
        )}
      </>
    )
  }

}

export default Lightbox