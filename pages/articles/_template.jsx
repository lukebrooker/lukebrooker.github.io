import React, { Component } from 'react'
import Content from '../../components/Content'

export default class extends Component {
  render () {
    window.location.replace(window.location.href.replace('/articles/', '/writing/'))
    return (
      <Content>
        <div>Redirecting…</div>
      </Content>
    )
  }
}
