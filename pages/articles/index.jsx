import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class Articles extends Component {
  render () {
    const {
      config
    } = this.props
    return (
      <DocumentTitle title={config.htmlTitle} />
    )
  }
}

Articles.propTypes = {
  state: PropTypes.object,
  config: PropTypes.object
}
