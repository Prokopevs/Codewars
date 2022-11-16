const arr = [1,2,3,4,5,7]

const foo = (arr) => {
const summary = arr.reduce((sum, current) => sum+current, 0)
const everage = Number((summary/arr.length).toFixed(2))
console.log(everage)
}

foo(arr)