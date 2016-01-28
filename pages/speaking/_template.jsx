import React, { Component } from 'react'
import { RouteHandler } from 'react-router'
import Content from '../../components/Content'

export default class extends Component {
  render () {
    return (
      <Content>
        <RouteHandler {...this.props}/>
      </Content>
    )
  }
}
