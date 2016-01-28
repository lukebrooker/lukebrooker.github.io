import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import Logo from '../components/Logo'
import Nav from '../components/Nav'

class Index extends Component {
  render () {
    const {
      config
    } = this.props
    return (
      <DocumentTitle title={config.htmlTitle}>
        <div className='D(f) Fld(c) Flx(flx1) Mah(100%)'>
          <div className='D(f) Fld(c) Fld(r)--land Flx(flx1) Jc(c)--land'>
            <div className='D(f) Fld(c) Ai(c) Jc(c) My(r1) Flx(flx1) Flxg(0)--land'>
              <Logo className='W(35vw) H(35vw) Miw(r4) Mih(r4) Maw(r6) Mah(r6)' />
              <h1 className='Fz(ms2) Fz(ms3)--sm Fw(600) Mt(r1h) Mt(r2)--sm Whs(nw)'>{config.siteTitle}</h1>
              <h2 className='Op(.6) Whs(nw)'>{config.siteTagline}</h2>
            </div>
            <div className='D(f)--land Jc(c)--land Ai(c)--land'>
              <Nav className='Fz(ms2) My(r1) Px(r1) Mstart(r4)--land' />
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

Index.propTypes = {
  config: PropTypes.object
}

export default Index
