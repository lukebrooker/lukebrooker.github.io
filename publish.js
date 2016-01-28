var ghpages = require('gh-pages')
var path = require('path')
var fs = require('fs-extra')

function copyCname (cb) {
  fs.copy('./CNAME', './public/CNAME', function (err) {
    if (err) return console.error(err)
    console.log('CNAME copied')
    if (typeof cb === 'function') cb()
  })
}

function copyPresentations (cb) {
  fs.copy('./presentations', './public/presentations', function (err) {
    if (err) return console.error(err)
    console.log('Presentations Copied')
    if (typeof cb === 'function') cb()
  })
}

function copyToBranch (cb) {
  ghpages.publish(path.join(__dirname, 'public'), function (err) {
    if (err) return console.error(err)
    console.log('Pushed to github pages')
    if (typeof cb === 'function') cb()
  })
}

function publish () {
  copyCname(copyPresentations(copyToBranch(function () {
    console.log('Published!')
  })))
}

publish()
