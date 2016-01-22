function pxToRem (value, baseFontSize) {
  baseFontSize = baseFontSize || '16'
  return +(value / baseFontSize).toFixed(3) + 'rem'
}

// Calculate Rhythm
function r (value, unit) {
  unit = unit || 'rem'
  return value * 1.5 + unit
}

// Calculate Modular Scale
function calcScale (value, base, ratio, unit) {
  return +(Math.pow(ratio, value) * base).toFixed(3) + unit
}

function ms (value, unit) {
  unit = unit || 'rem'
  return calcScale(value, 1, 1.2, unit)
}

/* eslint-disable */
module.exports = {
  cssDest: './css/atomic.css',
  configs: {
    breakPoints: {
      osm: '@media screen and (min-width: ' + pxToRem(470) + ') and (max-width: ' + pxToRem(879) + ')',
      sm: '@media screen and (min-width: ' + pxToRem(470) + ')',
      omd: '@media screen and (min-width: ' + pxToRem(880) + ') and (max-width: ' + pxToRem(1199) + ')',
      md: '@media screen and (min-width: ' + pxToRem(880) + ')',
      lg: '@media screen and (min-width: ' + pxToRem(1200) + ')'
    },
    custom: {
      // Colours
      darkest: 'hsl(188, 28%, 12%)',
      dark: 'hsl(188, 42%, 18%)',
      muted: 'hsl(188, 18%, 56%)',
      neutral: 'hsl(195, 32%, 80%)',
      light: 'hsl(213, 44%, 95%)',
      // Borders
      bd1: 'solid 1px',
      bd2: 'solid 2px',
      // Rhythm
      re: r(0.125),
      rq: r(0.25),
      rh: r(0.5),
      r3q: r(0.75),
      r1: r(1),
      r1q: r(1.25),
      r1h: r(1.5),
      r2: r(2),
      r3: r(3),
      r4: r(4),
      r6: r(6),
      r8: r(8),
      r16: r(16),
      r32: r(32),
      // Modular Scale
      msn2: ms(-2),
      msn1: ms(-1),
      ms0: ms(0),
      ms1: ms(1),
      ms2: ms(2),
      ms3: ms(3),
      ms4: ms(4),
      ms5: ms(5),
      ms6: ms(6),
      // Fonts
      lbsans: '"Input Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      lbmono: 'Input, Hack, Consolas, monaco, monospace',
      // Border Radius
      rnd: '500px',
      // Shadows
      sh1: '0 1px 4px 0 rgba(0, 0, 0, 0.185)',
      sh2: '0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.15)',
      sh3: '0 11px 7px 0 rgba(0, 0, 0, 0.09), 0 13px 25px 0 rgba(0, 0, 0, 0.15)',
      sh4: '0 14px 12px 0 rgba(0, 0, 0, 0.085), 0 20px 40px 0 rgba(0, 0, 0, 0.15)',
      sh5: '0 17px 17px 0 rgba(0, 0, 0, 0.075), 0 27px 55px 0 rgba(0, 0, 0, 0.15)',
      shw: '0 0 15px 5px #fff',
      ish1: 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.185)',
      // Flexbox
      flx1: '1',
      if: 'inline-flex',
      // Transitions
      eo: 'transform .3s cubic-bezier(0.19, 1, 0.22, 1), opacity .3s cubic-bezier(0.19, 1, 0.22, 1)', // Ease out
      eib: 'transform .3s cubic-bezier(0.6, -0.28, 0.735, 0.045), opacity .3s cubic-bezier(0.6, -0.28, 0.735, 0.045)',  // Ease in back
      eob: 'transform .3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity .3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',  // Ease out back
      aeo:  'all .3s cubic-bezier(0.19, 1, 0.22, 1)',
      aeib: 'all .3s cubic-bezier(0.6, -0.28, 0.735, 0.045)',
      aeob: 'all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      // Defaults
      i: 'inherit'
    },
    classNames: [
      'Lh(1.5)',
      'Ff(lbsans)',
    ]
  }
}
/* eslint-enable */
