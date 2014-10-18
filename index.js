var concat = require('concat-stream')
var phantom = require('phantom-render-stream')

var render = phantom()

process.stdin.pipe(concat(function(data) {
  data = data.toString().trim()

  if (/^https?:\/\//.test(data)) return render(data).pipe(process.stdout)

  var r = render()
  r.pipe(process.stdout)
  r.end(data)
}))