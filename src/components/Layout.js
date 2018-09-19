import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({children, title}) => (
  <div id="content">
    <Helmet title={title} />
    <Navbar />
    {children}
    <Footer />
  </div>  
)


export default TemplateWrapper