import React from 'react'
import { Link as RouterLink } from 'react-router'
import { link } from 'gatsby-helpers'

const Link = ({ children, to, ...props}) => (
  <RouterLink to={link(to)} {...props}>
    {children}
  </RouterLink>
)

export default Link
