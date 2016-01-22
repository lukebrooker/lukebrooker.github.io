import React from 'react'

const Logo = ({
  className = 'W(r1) H(r1) Miw(r1) Mih(r1) Maw(r1) Mah(r1)'
}) => {
  const classes = 'Pos(r) M(rh) ' + className
  return (
    <div className={classes}>
      <div className='StretchedBox D(f) Flw(w) Trs(eo) Rotate(45deg)'>
        <div className='Bgc(cc) W(1/2) H(100%) Pend(5%) Bgcp(cb) Trs(eob) Op(.9) Op(1):h Scale(1.1):h'></div>
        <div className='D(f) Fld(c) W(1/2) H(100%) Pstart(5%)'>
          <div className='Bgc(cc) W(100%) H(1/2) Pb(11.1%) Bgcp(cb) Trs(eob) Op(.6) Op(1):h Scale(1.1):h'></div>
          <div className='Bgc(cc) W(100%) H(1/2) Pt(11.1%) Bgcp(cb) Trs(eob) Op(.3) Op(1):h Scale(1.1):h'></div>
        </div>
      </div>
    </div>
  )
}

export default Logo
