import React, { Component } from 'react'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'

export default class Work extends Component {
  render () {
    const {
      pages,
      config,
      ...props
    } = this.props
    return (
      <DocumentTitle title={config.blogTitle}>
        <div>
          <ul>
            {pages.map((page, key) => {
              return (page.data && (page.path.indexOf('/work/') !== -1))
                ? (<li key={key}><Link to={link(page.path)}>{page.data.title}</Link></li>)
                : undefined
            })}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
