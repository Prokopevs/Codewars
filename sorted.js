
const arr1 = ['abcd', 'bdac', 'cabd']
const arr2 = ['abcd', 'bdXc', 'cabd']

const f1 = (arr) => {
    const sorted = arr.map(str => str.split('').sort().join(''))
    
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] !== sorted[0]) {
          return false
        }
    }
    return true
}

console.log(f1(arr1))
console.log(f1(arr2))