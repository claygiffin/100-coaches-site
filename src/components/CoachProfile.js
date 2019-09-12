import React from 'react'
import {markdownContent} from '../components/Content'
import ContactFormLink from '../components/ContactFormLink'
import Helmet from 'react-helmet'
import {Portal} from 'react-portal';

const hireTags = [
  'Coach',
  'Executive Coach',
  'CEO Coach',
  'Consultant',
  'Corporate Consultant',
  'Speaker',
  'Public Speaker'
]

export default class CoachProfile extends React.Component {

  constructor(props) {
    super(props);
    this.copyURLToClipboard = this.copyURLToClipboard.bind(this);
  }

  copyURLToClipboard() {
    const el = document.createElement('textarea');
    el.value = window.location;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    const notification = document.querySelector('.notification.copied');
    notification.classList.add('active')
    notification.classList.remove('inactive');
    setTimeout(() => {
      notification.classList.add('inactive')
      notification.classList.remove('active');
    }, 500)
  }

  render() {
    const { coach } = this.props;
    const firstName = coach.coachName.split(' ')[0];
    const Bio = markdownContent;
    return (
        <div className="coach-profile">
          <Helmet title={`${coach.coachName}'s Profile`} />
          <div className="flex-row">
            <div className="coach-links">
              {coach.links &&
                <>
                  { coach.links.website && <a className="website icon" href={`//${coach.links.website.replace(/(^\w+:|^)\/\//, '')}`} title="Website" target="_blank" rel="noopener noreferrer" ><span className="hidden">{coach.links.website.replace(/(^\w+:|^)\/\//, '')}</span></a> }
                  { coach.links.linkedin && <a className="linkedin icon" href={`https://linkedin.com/in/${coach.links.linkedin}`} title="LinkedIn" target="_blank" rel="noopener noreferrer" ><span className="hidden">LinkedIn Profile</span></a> }
                  { coach.links.twitter && <a className="twitter icon" href={`https://twitter.com/${coach.links.twitter}`} title="Twitter" target="_blank" rel="noopener noreferrer" ><span className="hidden">@{coach.links.twitter}</span></a> }
                  { coach.links.facebook && <a className="facebook icon" href={`https://facebook.com/${coach.links.facebook}`} title="Facebook" target="_blank" rel="noopener noreferrer" ><span className="hidden">Facebook Profile</span></a> }
                  { coach.links.instagram && <a className="instagram icon" href={`https://instagram.com/${coach.links.instagram}`} title="Instagram" target="_blank" rel="noopener noreferrer" ><span className="hidden">@{coach.links.instagram}</span></a> }
                </>
              }
            </div>        
            <div className="coach-photo">
            <div className="image-wrap-outer">
              <div className="image-wrap">
                  <img src={coach.photo} alt={coach.coachName + ' 100 Coaches'}/>
              </div>  
            </div>
          </div>
            <div className="functional-links">
              <div className="share icon" title="Share" onClick={this.copyURLToClipboard} ><span className="hidden">Share</span></div>
              <div className="print icon" title="Print" onClick={() => window.print()} ><span className="hidden">Print</span></div>
            </div>
          </div>
          <div className="profile-content" >
            <h1>
              {coach.coachName}
            </h1>
            <h5>
              {coach.jobTitle}
            </h5>
            <div className="tags">          
              {coach.tags && coach.tags.map((tag, i) => <h6 key={i}>{tag}</h6>)}
            </div>
            {coach.tags && coach.tags.filter(tag => hireTags.includes(tag)).length > 0 ? <ContactFormLink className="contact-link cta-link" linkText={`Work with ${firstName}`} subject={`Inquiry to work with ${coach.coachName}`} /> : <span className="divider"></span>}
            <div className="bio">
              <Bio content={coach.bio} />
            </div>   
          </div>
          <div className="print-only contact-info">
            <h6>email: info@100coachesconsulting.com</h6>
            <h6>phone: 212.877.4277</h6>
          </div>
          <Portal>
            <div className="notification copied">Link to <em>{coach.coachName}'s</em> profile has been copied to the clipboard.</div>
          </Portal>
        </div>
    )
  }
}