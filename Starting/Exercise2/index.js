const util = require('./Utilities/util1.js')
const { lgNum, cut3 } = require('./Utilities/util2.js')

const arr = [1, 2, 3, 4, 5, 6]
const wordArr = ['ccc', 'bbb', 'ddd', 'eee']

console.log(util.concat(arr, wordArr))
console.log(util.sum(arr))
console.log(lgNum(arr))
console.log(cut3(wordArr))
