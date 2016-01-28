import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'

import '../css/zenburn.css'

export default class Md extends Component {
  render () {
    const {
      page,
      config
    } = this.props
    const post = page.data
    const workPost = !!post.projectDate
    const date = workPost ? post.projectDate : post.date
    return (
      <DocumentTitle title={`${post.title} | ${config.blogTitle}`}>
        <div className='markdown Pb(r2)'>
          <h1 className='Lh(1) Fz(ms3) Fz(ms4)--osm Fz(ms5)--omd Fz(ms6)--lg Mb(rh) Lts(-0.02em) Fw(600)'>{post.title}</h1>
          <p className='Mb(r1h) Op(.6) Fz(msn1) Tt(u)'>{workPost ? date : moment(date).format('MMMM D, YYYY')}</p>
          <p className='Fz(ms1) Mb(r1) Op(.6)'>{post.teaser}</p>
          <hr/>
          <div dangerouslySetInnerHTML={{__html: post.body}}/>
        </div>
      </DocumentTitle>
    )
  }
}

Md.propTypes = {
  page: PropTypes.object,
  config: PropTypes.object
}
