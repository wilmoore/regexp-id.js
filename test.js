'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var regexpId = require('./')

/*!
 * fixtures.
 */

var company = {
  name: 'Acme Corporation',
  contact: '"Example Anvil" <example.anvil@example.com>'
}

/*!
 * tests.
 */

test('regexpId()', function (t) {
  var id = regexpId(/^"([^"]+)"/, 'contact')
  t.equal(id(company), '"Example Anvil"')
  t.end()
})
