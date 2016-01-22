import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import Link from '../../components/Link'

export default class Writing extends Component {
  render () {
    const {
      pages,
      config
    } = this.props
    console.log(pages)
    return (
      <DocumentTitle title={config.htmlTitle}>
        <div>
          <ul>
            {pages.map((page, key) => {
              return (page.data && (page.path.indexOf('/writing/') !== -1))
                ? (<li key={key}><Link to={page.path}>{page.data.title}</Link></li>)
                : undefined
            })}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
