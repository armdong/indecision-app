console.log('utils.js is running')

const square = (x) => x * x

const add = (x, y) => x + y

const substract = (x, y) => x - y

export {
  square,
  add,
  substract as default
}