import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import Link from '../components/Link'
import Logo from '../components/Logo'

class Index extends Component {
  render () {
    const {
      config
    } = this.props
    return (
      <DocumentTitle title={config.htmlTitle}>
        <div className='D(f) Fld(c) Flx(flx1) Mah(100%)'>
          <div className='D(f) Fld(c) Ai(c) Jc(c) Flx(flx1)'>
            <Logo className='W(50vw) H(50vw) Miw(r6) Mih(r6) Maw(r8) Mah(r8)' />
            <h1 className='Fz(ms2) Fw(600) Mt(r2) Mt(r3)--sm'>{config.siteTitle}</h1>
            <h2 className='Op(.6)'>{config.siteTagline}</h2>
          </div>
          <ul className='Fz(ms1) Fz(ms2)--osm Fz(ms3)--md My(r1) Px(rh) Px(r1)--sm'>
            <li><Link to='/work/'>Work</Link></li>
            <li><Link to='/writing/'>Writing</Link></li>
            <li><Link to='/speaking/'>Speaking</Link></li>
          </ul>
          <div className='D(f) Flw(w) Flxs(0) Ai(c) Py(rh) Px(rh) Px(r1)--sm Pos(r) Fz(msn1) Fz(ms0)--sm'>
            <div className='StretchedBox Bgc(cc) Op(.2)' />
            <span className='Mend(rq) Flxs(0)'>Also found on:</span>
            <a href='http://twitter.com/lukebrooker' className='Px(rq) Whs(nw)'>
              (I)<span className='D(n) D(i)--md'>Twitter</span>
            </a>
            <a href='http://dribbble.com/lukebrooker' className='Px(rq) Whs(nw)'>
              (I)<span className='D(n) D(i)--md'>Dribbble</span>
            </a>
            <a href='http://github.com/lukebrooker' className='Px(rq) Whs(nw)'>
              (I)<span className='D(n) D(i)--md'>Github</span>
            </a>
            <a href='http://instagram.com/luke' className='Px(rq) Whs(nw)'>
              (I)<span className='D(n) D(i)--md'>Instagram</span>
            </a>
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
