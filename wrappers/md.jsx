import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'

import '../css/zenburn.css'

export default class Md extends Component {
  getSectionTitle (workPost, speakingPost) {
    if (workPost) {
      return 'Work'
    } else if (speakingPost) {
      return 'Speaking'
    } else {
      return 'Writing'
    }
  }
  render () {
    const {
      page,
      config
    } = this.props
    const post = page.data
    const workPost = !!post.projectDate
    const speakingPost = !!post.slidesLink || !!post.embedLink
    const iframeSrc = post.embedLink || post.slidesLink
    const date = workPost ? post.projectDate : post.date
    const sectionTitle = this.getSectionTitle(workPost, speakingPost)
    return (
      <DocumentTitle title={`${post.title} | ${sectionTitle} | ${config.siteTitle}`}>
        <div className='markdown Pb(r2)'>
          <h1 className='Lh(1) Fz(ms3) Fz(ms4)--osm Fz(ms5)--omd Fz(ms6)--lg Mb(rh) Lts(-0.02em) Fw(600)'>{post.title}</h1>
          <p className='Mb(r1h) Op(.6) Fz(msn1) Tt(u)'>{workPost ? date : moment(date).format('MMMM D, YYYY')}</p>
          <p className='Fz(ms1) Mb(r1) Op(.6)'>{post.teaser}</p>
          <hr/>
          <div dangerouslySetInnerHTML={{__html: post.body}}/>
          { post.link ? (<p className='My(r1) Ta(c)'>
            <a href={post.link} className='Link'>View the site ></a>
          </p>) : undefined }
          { speakingPost ? (<div>
            <div className='W(100%) H(0) Pt(82.7323%) Pos(r) Brrs(rq) Bxsh(sh4)'>
              {(<iframe
                src={iframeSrc}
                className='StretchedBox W(100%) H(100%)'
                frameBorder='0' />
              )}
            </div>
            <p className='My(r1) Ta(c)'>
              <a href={post.slidesLink} className='Link'>View full screen ></a>
            </p>
          </div>) : undefined }
        </div>
      </DocumentTitle>
    )
  }
}

Md.propTypes = {
  page: PropTypes.object,
  config: PropTypes.object
}
