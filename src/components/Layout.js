import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({children, title}) => (
  <>
    <Helmet title={title} ><html lang="en" /></Helmet>
    <Navbar />
    <div id="content">
      {children}
      <Footer />
    </div>  
  </>
)


export default TemplateWrapper