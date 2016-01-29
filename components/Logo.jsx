import React from 'react'

const Logo = ({
  className = 'W(r1) H(r1) W(r1h)--md H(r1h)--md Miw(r1) Mih(r1) Maw(r2) Mah(r2)'
}) => {
  const classes = 'Pos(r) M(rh) ' + className
  return (
    <div className={classes}>
      <div className='StretchedBox D(f) Flw(w) Trs(eo) Rotate(45deg)'>
        <div className='Bgc(cc) W(45%) H(100%) Trs(eob) Op(.9) Op(1):h Scale(1.1):h'></div>
        <div className='D(f) Fld(c) W(45%) H(100%) Mstart(a)'>
          <div className='Bgc(cc) W(100%) H(45%) Trs(eob) Op(.6) Op(1):h Scale(1.1):h'></div>
          <div className='Bgc(cc) W(100%) H(45%) Mt(a) Trs(eob) Op(.3) Op(1):h Scale(1.1):h'></div>
        </div>
      </div>
    </div>
  )
}

export default Logo
