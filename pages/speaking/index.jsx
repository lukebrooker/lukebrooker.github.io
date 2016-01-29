import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import sortBy from 'lodash/collection/sortBy'
import moment from 'moment'
import Link from '../../components/Link'

export default class Speaking extends Component {
  render () {
    const {
      pages,
      config
    } = this.props
    let sortedPages = sortBy(pages, (page) => {
      let ref
      return (ref = page.data) != null ? ref.date : void 0
    }).reverse()
    return (
      <DocumentTitle title={config.htmlTitle}>
        <div>
          {sortedPages.map((page, key) => {
            return (page.data && (page.path.indexOf('/speaking/') !== -1))
              ? (<div key={key} className='D(f) W(100%) P(rh) Mb(r1)'>
                  <div className='D(f) Fld(c) W(1/2)--sm Mend(rh)'>
                    <h2 className='Fz(ms1) Fw(600)'><Link className='Link' to={page.path}>{page.data.title}</Link></h2>
                    <div className='Fz(msn1) Tt(u) Op(.6) Mb(rh)'>{moment(page.data.date).format('MMMM D, YYYY')}</div>
                  </div>
                  { page.data.teaserImage
                    ? (<div className='W(1/2)--sm Mstart(rh)'>
                      <Link to={page.path}><img src={page.path + page.data.teaserImage} alt={page.data.title}/></Link>
                    </div>)
                    : undefined}
                </div>)
              : undefined
          })}
        </div>
      </DocumentTitle>
    )
  }
}

Speaking.propTypes = {
  pages: PropTypes.object,
  config: PropTypes.object
}
