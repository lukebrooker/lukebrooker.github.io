var ghpages = require('gh-pages')
var path = require('path')
var fs = require('fs-extra')

function copyCname (cb) {
  fs.copy('/CNAME', '/public/CNAME', function (err) {
    if (err) return console.error(err)
    console.log('CNAME copied')
    cb()
  })
}

function copyPresentations (cb) {
  fs.copy('/presentations', '/public/presentations', function (err) {
    if (err) return console.error(err)
    console.log('Presentations Copied')
    cb()
  })
}

function copyToBranch () {
  ghpages.publish(path.join(__dirname, 'public'), function (err) {
    console.error(err)
  })
}

function publish () {
  copyCname(copyPresentations(copyToBranch()))
}

publish()
