import React, { Component, PropTypes } from 'react'
import { RouteHandler } from 'react-router'
import cx from 'classnames'
import Link from '../components/Link'
import Logo from '../components/Logo'
import Nav from '../components/Nav'
import Icons from '../components/Icons'
import Icon from '../components/Icon'
import { link } from 'gatsby-helpers'

import '../css/base.css'
import '../css/atomic.css'
import '../css/extra.css'

export default class Template extends Component {
  render () {
    const {state, config} = this.props
    const home = state.path === link('/')
    const classes = 'D(f) Fld(c) Mih(100%)'
    const mainClasses = cx(
      'Flxg(1) D(f) Fld(c)',
      !home && 'Maw(40em) Mx(a)'
    )
    return (
      <div className={classes}>
        <Icons />
        <div className={mainClasses}>
          {home ? undefined : (
            <div className='D(f) Ai(c) Flxs(0) Px(r1) Py(rh) Py(r1h)--md P(r2)--md'>
              <Link to='/' className='Bg(n)!'>
                <span className='Hidden'>{config.siteTitle}</span>
                <Logo />
              </Link>
              <Nav activePath={state.routes[1].path}
                className='D(f)'
                linkClasses='P(rh)'/>
            </div>
          )}
          <RouteHandler {...this.props}/>
        </div>
        <div className='D(f) Flw(w) Flxs(0) Ai(c) Py(rh) Px(r1) Pos(r) Fz(msn1)'>
          <div className='StretchedBox Bgc(cc) Op(.2) Z(-1)' />
          <div className='D(f) Ai(c) Jc(c)--land Maw(40em) Mx(a)'>
            <span className='Mend(rq) Flxs(0) Tt(u) Op(.8)'>Also found on:</span>
            <a href='http://twitter.com/lukebrooker' className='Mx(rq) Whs(nw) Op(.6) Op(1):h D(if) Ai(c)'>
              <Icon name='twitter' /><span className='Mstart(rq) D(n) D(i)--md'>Twitter</span>
            </a>
            <a href='http://dribbble.com/lukebrooker' className='Mx(rq) Whs(nw) Op(.6) Op(1):h D(if) Ai(c)'>
              <Icon name='dribbble' /><span className='Mstart(rq) D(n) D(i)--md'>Dribbble</span>
            </a>
            <a href='http://github.com/lukebrooker' className='Mx(rq) Whs(nw) Op(.6) Op(1):h D(if) Ai(c)'>
              <Icon name='github' /><span className='Mstart(rq) D(n) D(i)--md'>Github</span>
            </a>
            <a href='http://instagram.com/luke' className='Mx(rq) Whs(nw) Op(.6) Op(1):h D(if) Ai(c)'>
              <Icon name='instagram' /><span className='Mstart(rq) D(n) D(i)--md'>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  state: PropTypes.object,
  config: PropTypes.object
}
