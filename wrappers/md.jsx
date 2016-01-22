import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'
import ReadNext from '../components/ReadNext'

import '../css/zenburn.css'

module.exports = React.createClass({
  render: function() {
    var post
    post = this.props.page.data;

    return (
      <DocumentTitle title={`${post.title} | ${this.props.config.blogTitle}`}>
        <div className="markdown">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.body}}/>
          <em>
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr />
          <ReadNext post={post} {...this.props}/>
          <p>
            <strong>{this.props.config.authorName}</strong> is a person
          </p>
        </div>
      </DocumentTitle>
    );
  }
});
