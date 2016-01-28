import React, { Component } from 'react'
import { RouteHandler } from 'react-router'
import Content from '../../components/Content'

export default class extends Component {
  render () {
    console.log(this.props)
    return (
      <Content>
        <RouteHandler {...this.props}/>
      </Content>
    )
  }
}
