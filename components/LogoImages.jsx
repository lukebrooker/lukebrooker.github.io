import React from 'react'

const LogoImages = ({
  className = 'W(100%) H(0) Pt(100%) Ov(v)',
  basePath,
  teaserImages
}) => {
  const classes = 'Pos(r) ' + className
  return (
    <div className={classes}>
      <div className='StretchedBox D(f) Flw(w) Trs(eo) Mx(nrq)'>
        <div className='Bgc(cc) W(100%) H(1/2) Bgp(c) Bgcp(cb) Bgz(cv) Trs(eob) Op(.9) Op(1):h Mb(rh) Px(rq)'
          style={{ backgroundImage: 'url(' + basePath + teaserImages[0] + ')' }} />
        <div className='Bgc(cc) W(1/2) H(1/2) Bgp(c) Bgcp(cb) Bgz(cv) Trs(eob) Op(.6) Op(1):h Px(rq)'
          style={{ backgroundImage: 'url(' + basePath + teaserImages[1] + ')' }} />
        <div className='Bgc(cc) W(1/2) H(1/2) Bgp(c) Bgcp(cb) Bgz(cv) Trs(eob) Op(.3) Op(1):h Px(rq)'
          style={{ backgroundImage: 'url(' + basePath + teaserImages[2] + ')' }} />
      </div>
    </div>
  )
}

export default LogoImages
