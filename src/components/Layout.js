import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({children, title, navTransparent}) => (
  <>
    <Helmet title={title} ><html lang="en" /></Helmet>
    <Navbar navTransparent={navTransparent} />
    <div id="content" className={navTransparent ? 'transparent-nav' : ''}>
      {children}
      <Footer />
    </div>  
  </>
)


export default TemplateWrapper