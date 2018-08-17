import React from 'react'
import PropTypes from 'prop-types'
import { CoachProfileTemplate } from '../../templates/coach-profile'

const CoachProfilePreview = ({ entry, widgetFor }) => (
  <CoachProfileTemplate
    content={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

CoachProfilePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CoachProfilePreview
