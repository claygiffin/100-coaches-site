import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export const markdownContent = ({content, className}) => {
  content = remark()
      .use(recommended)
      .use(remarkHtml)
      .processSync(content).toString();
  return (
    <HTMLContent content={content} className={className} /> 
  )
}

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
