import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div id="content">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    {children}
  </div>
)

export default TemplateWrapper
