import React, { Component } from 'react'
import { RouteHandler, Link } from 'react-router'
import { sortBy } from 'lodash'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'

export default class Index extends Component {
  render () {
    const {
      pages,
      config,
      ...props
    } = this.props
    console.log(pages)
    return (
      <DocumentTitle title={config.blogTitle}>
        <ul>
          <li><Link to={link('/work/')}>Work</Link></li>
          <li><Link to={link('/writing/')}>Writing</Link></li>
          <li><Link to={link('/speaking/')}>Speaking</Link></li>
        </ul>
      </DocumentTitle>
    )
  }
}
