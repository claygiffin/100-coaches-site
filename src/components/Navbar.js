import React from 'react'
import { Link } from 'gatsby'
import ContactFormLink from '../components/ContactFormLink'
import logoDefault from '../assets/100Coaches_logo.svg'
import logoKnockout from '../assets/100Coaches_logo_knockout.svg'

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      logo: logoKnockout,
      transparent: this.props.navTransparent,
    }

    this.toggleNav = this.toggleNav.bind(this);
    this.setLogo = this.setLogo.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.navbarRef = React.createRef();
  }

  toggleNav() {
    const nav = this.navbarRef.current;
    if (!nav.classList.contains('activated')) {
      nav.classList.add('activated');
      this.setState({logo: logoDefault});
    } else {
      nav.classList.remove('activated');
      this.handleScroll();
    }
  }

  setLogo() {
    this.props.navTransparent ? this.setState({logo: logoKnockout, transparent: true}) : this.setState({logo: logoDefault, transparent: false})
  }

  handleScroll(){
    let nav = this.navbarRef.current;
    if (window.scrollY > 30 || nav.classList.contains('activated')) {
      nav.classList.add('scrolled');
      this.setState({logo: logoDefault});
    } else {
      nav.classList.remove('scrolled');
      this.setLogo();
    }
  }

  componentDidMount(){
    this.setLogo();
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <nav ref={this.navbarRef} className={`navbar ${this.state.transparent === true ? 'transparent' : ''} ${this.state.transparent === false ? 'white' : ''}`}>
        <Link to="/" className="site-logo">
          <img src={this.state.logo} alt="Marshall Goldsmith 100 Coaches" className="logo" />
        </Link>
        <div className="mobile-nav-button" onClick={this.toggleNav} >
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="navbar-list">
          <Link className="navbar-item" activeClassName="active" to="/about/">
            Our Story
          </Link>
          <Link className="navbar-item" activeClassName="active" to="/coaches/">
            The Coaches
          </Link>
          <Link className="navbar-item" activeClassName="active" to="/services/">
            Our Services
          </Link>
          <div className="navbar-item">
            <ContactFormLink linkText="Work With Us" />
          </div>
        </div>
    </nav>
    )
  }
}

export default Navbar
