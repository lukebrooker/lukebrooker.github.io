import React, { Component } from 'react'
import { RouteHandler } from 'react-router'
import Link from '../../components/Link'

export default class extends Component {
  render () {
    return (
      <div>
        <h1><Link to='/writing/'>Writing</Link></h1>
        <RouteHandler {...this.props}/>
      </div>
    )
  }
}
