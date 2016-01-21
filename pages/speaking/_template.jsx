import React, { Component } from 'react'
import { RouteHandler, Link } from 'react-router'
import { link } from 'gatsby-helpers'

export default class extends Component {
  render() {
    return (
      <div>
        <h1><Link to={link('/speaking/')}>Speaking</Link></h1>
        <RouteHandler {...this.props}/>
      </div>
    )
  }
}
