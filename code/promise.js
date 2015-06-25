var fs = require('fs')
var path = require('path')

function readPackageJson() {
    var filePath = path.join(__dirname, '../package.json')
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, 'utf8', function(err, data) {
            if (err) {
                reject(err)
            } else {
                try {
                    data = JSON.parse(data)
                    resolve(data)
                } catch (e) {
                    reject(e)
                }
            }
        })
    })
}

var p = readPackageJson()

p.then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})
