import React from 'react'
import Link from './Link'
import cx from 'classnames'

const navItems = [
  {
    path: '/work/',
    title: 'Work'
  },
  {
    path: '/writing/',
    title: 'Writing'
  },
  {
    path: '/speaking/',
    title: 'Speaking'
  }
]

const Nav = ({
  activePath,
  className,
  linkClasses
}) => {
  return (
    <ul className={className}>
      {navItems.map((item, i) => {
        const activeClass = (item.path === activePath)
        const allLinkClasses = cx(
          linkClasses,
          activeClass && 'Op(1)',
          !activeClass && 'Op(.6) Trs(eo) Op(.9):h'
        )
        return (
          <li key={i}>
            <Link to={item.path}
              className={allLinkClasses}>
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Nav
