import React from 'react'
import Lightbox from './Lightbox'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactFormLightbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      submitted: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(e){
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({
          submitted: true
        })
      })
      .catch(error => alert(error));

    e.preventDefault();
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  } 

  handleClose(){
    this.props.onClose();
    setTimeout(() => {
      this.setState({
        name: "",
        email: "",
        subject: "",
        message: "",
        submitted: false,
      })
    }, 300);
  }

  componentDidMount(){
    this.setState({subject: this.props.subject})
  }

  render(){
    return(
      <Lightbox 
        isOpen={this.props.isOpen}
        onClose={this.handleClose}
        className={`contact-form ${this.props.className ? this.props.className : ''}`}
      >
        <h2>Work With Us</h2>
        {this.state.submitted ? 
          <div className="form-success">
            <p>Thank you, your inquiry has been sent successfully.</p>
            <button className="cta-link" onClick={this.handleClose} >Return to site</button>
          </div>
        :
          <form name="contact" method="POST" data-netlify="true" onSubmit={this.handleSubmit} >
            <input type="text" name="name" placeholder="Your name (required)" required={true} onChange={this.handleChange} />
            <input type="email" name="email" placeholder="Your email address (required)" required={true} onChange={this.handleChange} />
            <input type="text" name="subject" autoComplete="off" placeholder="Which coaches and/or services are you interested in?" defaultValue={this.props.subject} onChange={this.handleChange} />
            <textarea name="message" placeholder="Additional notes" onChange={this.handleChange} ></textarea>
            <button type="submit" className="cta-link" >Submit Inquiry</button>
          </form>
        }
      </Lightbox>      
    )
  }
}