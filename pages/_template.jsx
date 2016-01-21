import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { link } from 'gatsby-helpers'
import { rhythm, fontSizeToMS } from 'utils/typography'

import '../css/styles.css'

export default class extends React.Component {
  render() {
    let header
    if (this.props.state.path === link('/')) {
      header = (
        <h1 style={{  fontSize: fontSizeToMS(2.5).fontSize,  lineHeight: fontSizeToMS(2.5).lineHeight,  marginBottom: rhythm(1.5)}}>
          <Link style={{  textDecoration: 'none',  color: 'inherit'}} to={link('/')} > {this.props.config.pageTitle} </Link>
        </h1>
      )
    } else {
      header = (
        <h2><Link style={{  textDecoration: 'none',  color: 'inherit'}} to={link('/')} > {this.props.config.pageTitle} </Link></h2>
      )
    }
    return (
    <div>
      {header}
      <RouteHandler {...this.props}/>
    </div>
    )
  }
}
