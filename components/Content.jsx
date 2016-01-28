import React from 'react'
import cx from 'classnames'

const Logo = ({
  className,
  children
}) => {
  const classes = cx(
    'Px(r1) Px(r2)--md Pt(r1) Pb(r2)',
    className
  )
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Logo
