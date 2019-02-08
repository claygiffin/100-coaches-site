import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({children, title, navTransparent}) => (
  <>
    <Helmet title={title}>
      <html lang="en" /> 
      <meta name="description" content="100 Coaches offers the services of a unique spectrum of talent — including the world’s leading executive coaches, consultants, speakers, authors, iconic leaders, entrepreneurs and non-profit leaders." />
    </Helmet>
    <Navbar navTransparent={navTransparent} />
    <div id="content" className={navTransparent ? 'transparent-nav' : ''}>
      {children}
      <Footer />
    </div>  
  </>
)


export default TemplateWrapper