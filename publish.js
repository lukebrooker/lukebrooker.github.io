var ghpages = require('gh-pages')
var path = require('path')
var fs = require('fs-extra')

fs.copy('/CNAME', '/public/CNAME', function (err) {
  if (err) return console.error(err)
  console.log('CNAME copied')
  ghpages.publish(path.join(__dirname, 'public'), function (err) {
    console.error(err)
  })
})
