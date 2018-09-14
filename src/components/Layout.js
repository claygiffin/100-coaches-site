import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({children, title}) => (
  <div id="content">
    <Helmet title={title} />
    <Navbar />
    {children}
  </div>  
)


export default TemplateWrapper