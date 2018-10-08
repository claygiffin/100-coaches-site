import React from 'react'
import Lightbox from './Lightbox'
import CoachProfile from '../components/CoachProfile'

export class CoachLightbox extends React.Component {

  render(){
    return(
      <Lightbox 
        isOpen={this.props.isOpen}
        onClose={this.props.onClose}
        className='coach-profile' 
      >
        <CoachProfile coach={this.props.coach} />
      </Lightbox>      
    )
  }

}

export default CoachLightbox