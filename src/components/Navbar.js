import React from 'react'
import { Link } from 'gatsby'
import logoDefault from '../img/100Coaches_logo.svg'
import logoKnockout from '../img/100Coaches_logo_knockout.svg'

class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      logo: logoDefault,
    }
  }

  render() {
    return (
      <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={this.state.logo} alt="Marshall Goldsmith 100 Coaches" className="logo"/>
          </Link>
        </div>
        <div className="navbar-start">
          <Link className="navbar-item" activeClassName="active" to="/about">
            Our Story
          </Link>
          <Link className="navbar-item" activeClassName="active" to="/coaches">
            The Coaches
          </Link>
        </div>
      </div>
    </nav>
    )
  }

  componentDidMount(){
    const isRoot = window.location.pathname === "/";
    isRoot ? this.setState({logo: logoKnockout}) : this.setState({logo: logoDefault})
  }
}

export default Navbar
