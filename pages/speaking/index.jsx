import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import Link from '../../components/Link'

export default class Speaking extends Component {
  render () {
    const {
      pages,
      config
    } = this.props
    return (
      <DocumentTitle title={config.htmlTitle}>
        <div>
          <p>Presentations coming soon…</p>
          <ul>
            {pages.map((page, key) =>
              (page.data && (page.path.indexOf('/speaking/') !== -1))
                ? (<li key={key}><Link to={page.path}>{page.data.title}</Link></li>)
                : undefined
              )
            }
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}

Speaking.propTypes = {
  pages: PropTypes.object,
  config: PropTypes.object
}
