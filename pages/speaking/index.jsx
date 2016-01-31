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
      <DocumentTitle title={'Speaking | ' + config.htmlTitle}>
        <div className='Mx(nrq)--sm Mx(nrh)--md'>
          {sortedPages
            .filter((page) =>
              (page.data && (page.path.indexOf('/speaking/') !== -1)))
            .map((page, key) => {
              const itemDir = (key % 2 === 0) ? '' : ' Fld(rr)--sm'
              return (<div key={key}
                className={'D(f)--sm W(100%) Mb(r1h) Mb(r2)--md' + itemDir}>
                <div className='D(f) Fld(c) W(100%) W(1/2)--sm Px(rq)--sm Px(rh)--md'>
                  <h2 className='Fz(ms1) Fw(600) Mb(rh)'>
                    <Link className='Link'
                      to={page.path}>{page.data.title}</Link>
                  </h2>
                  <div className='Fz(msn1) Tt(u) Op(.6) Mb(rh)'>
                    {moment(page.data.date).format('MMMM D, YYYY')}
                  </div>
                </div>
                { page.data.teaserImage
                  ? (<div className='W(100%) W(1/2)--sm Px(rq)--sm Px(rh)--md'>
                    <Link to={page.path}>
                      <img src={page.path + page.data.teaserImage}
                        alt={page.data.title}/>
                    </Link>
                  </div>)
                  : undefined}
              </div>)
            }
          )}
          <div className='Ta(c) Op(.6)'>More being added soon.</div>
        </div>
      </DocumentTitle>
    )
  }
}

Speaking.propTypes = {
  pages: PropTypes.object,
  config: PropTypes.object
}
