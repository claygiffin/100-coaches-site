import React from 'react'
import { Link } from 'gatsby'
import logoDefault from '../assets/100Coaches_logo.svg'
import logoKnockout from '../assets/100Coaches_logo_knockout.svg'

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      logo: logoDefault,
      home: true
    }
  }

  render() {
    return (
      <nav className={`navbar ${this.state.home ? 'home' : ''}`}>
        <Link to="/" className="navbar-brand">
          <img src={this.state.logo} alt="Marshall Goldsmith 100 Coaches" className="logo"/>
        </Link>
        <div className="navbar-list">
          <Link className="navbar-item" activeClassName="active" to="/about">
            Our Story
          </Link>
          <Link className="navbar-item" activeClassName="active" to="/coaches">
            The Coaches
          </Link>
        </div>
    </nav>
    )
  }

  componentDidMount(){
    const isRoot = window.location.pathname === "/";
    isRoot ? this.setState({logo: logoKnockout, home: true}) : this.setState({logo: logoDefault, home: false})
  }
}

export default Navbar
