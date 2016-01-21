import React, { Component } from 'react'
import { RouteHandler, Link } from 'react-router'
import { sortBy } from 'lodash'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'

export default class Writing extends Component {
  render () {
    const {
      pages,
      config,
      ...props
    } = this.props
    console.log(pages)
    return (
      <DocumentTitle title={config.blogTitle}>
        <div>
          <ul>
            {pages.map((page, key) => {
              return (page.data && (page.path.indexOf('/writing/') !== -1))
                ? (<li key={key}><Link to={link(page.path)}>{page.data.title}</Link></li>)
                : undefined
            })}
          </ul>
        </div>
      </DocumentTitle>
    )
  }
}
