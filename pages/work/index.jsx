import React, { Component, PropTypes } from 'react'
import sortBy from 'lodash/collection/sortBy'
import DocumentTitle from 'react-document-title'
import Link from '../../components/Link'
import LogoImages from '../../components/LogoImages'

export default class Work extends Component {
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
      <DocumentTitle title={'Work | ' + config.htmlTitle}>
        <div className='D(f) Flw(w) M(nrh)'>
          {sortedPages.map((page, key) => {
            return (page.data && (page.path.indexOf('/work/') !== -1))
              ? (<Link key={key} to={page.path} className='D(f) Fld(c) W(100%) P(rh) Mb(r1) W(1/2)--sm'>
                  <div className='D(f) Mb(rh)'>
                    <div className='Mend(a) Op(.6):h LineClamp(1)'>{page.data.title}</div>
                    <div className='Op(.6)'>{page.data.projectDate}</div>
                  </div>
                  <div>
                    <LogoImages basePath={page.path} teaserImages={page.data.teaserImages} />
                  </div>
                </Link>)
              : undefined
          })}
        </div>
      </DocumentTitle>
    )
  }
}

Work.propTypes = {
  pages: PropTypes.object,
  config: PropTypes.object
}
