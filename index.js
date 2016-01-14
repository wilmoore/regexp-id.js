'use strict'

/*!
 * imports.
 */

var selectn = require('selectn')

/*!
 * exports.
 */

module.exports = regexpId

/**
 * Returns an identifier based on a RegExp match against an object property's value.
 *
 * @param {RegExp} regexp
 * Regular expression.
 *
 * @param {String} [path]
 * Dot or bracket-notation string path.
 *
 * @return {Function}
 * Unary function accepting an object to evaluate.
 */

function regexpId (regexp, path) {
  return function regexpId (object) {
    return (regexp.exec(selectn(path, object)) || [])[0]
  }
}
