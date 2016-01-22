import React, { Component, PropTypes } from 'react'
import { RouteHandler } from 'react-router'
import Heading from '../components/Heading'
import Link from '../components/Link'
import Logo from '../components/Logo'
import { link } from 'gatsby-helpers'

import '../css/base.css'
import '../css/atomic.css'

export default class Template extends Component {
  render () {
    const {state, config} = this.props
    return (
    <div className='D(f) Fld(c) H(100%)'>
      {(state.path === link('/'))
        ? undefined
        : (
        <div className='D(f) Ai(c)'>
          <Link to='/'><Logo /></Link>
          <Heading level='2'>
            <Link to='/'>{config.siteTitle}</Link>
          </Heading>
        </div>
      )}
      <RouteHandler {...this.props}/>
    </div>
    )
  }
}

Template.propTypes = {
  state: PropTypes.object,
  config: PropTypes.object
}
