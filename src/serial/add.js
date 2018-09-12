'use strict'

export default (methods) => (fns) => (fn, opts) => {
  fns.push([ 'fn', fn, opts ])
  return methods
}
