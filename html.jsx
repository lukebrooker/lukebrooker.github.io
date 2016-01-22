import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'

export default class Html extends React.Component {
  render () {
    const {
      body,
      favicon,
      title
    } = this.props
    const pageTitle = title || DocumentTitle.rewind()
    return (
      <html lang='en' className='H(100%)'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>
          {pageTitle}
        </title>
        <link rel='shortcut icon' href={favicon} />
      </head>
      <body className='H(100%) Miw(300px) M(0) Lh(1.5) Ff(lbsans) Bgc(dark) C(#fff.9)'>
        <div id='react-mount' className='H(100%)' dangerouslySetInnerHTML={{__html: body}} />
        <script src={link('/bundle.js')} />
      </body>
      </html>
    )
  }
}

Html.propTypes = {
  body: PropTypes.string,
  favicon: PropTypes.string,
  title: PropTypes.string
}

Html.defaultProps = { body: '' }
