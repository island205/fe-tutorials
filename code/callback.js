var fs = require('fs')
var path = require('path')

function readPackageJson(callback) {
  var filePath = path.join(__dirname, '../package.json')
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      callback(err)
    } else {
      try {
        data = JSON.parse(data)
        callback(null, data)
      } catch (e) {
        callback(e)
      }
    }
  })
}

readPackageJson(function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
