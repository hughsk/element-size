var test = require('tape')
var size = require('./')

test('on the dom', function(t) {
  var el = document.createElement('div')

  el.style.width = '16px'
  el.style.height = '16px'
  el.style.margin = '16px'
  el.style.padding = '16px'

  document.body.appendChild(el)

  t.deepEqual(size(el), [80, 80])
  t.end()
})

test('off the dom', function(t) {
  var el = document.createElement('div')

  el.style.width = '16px'
  el.style.height = '16px'
  el.style.margin = '16px'
  el.style.padding = '16px'

  t.deepEqual(size(el), [80, 80])
  t.end()
})
