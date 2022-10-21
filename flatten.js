// const arr = [ [1, [2] ]]
// let count = 0
// function flatten(arr) {
//     for(let i=0; i<=arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//             console.log(arr[i])
//             count++
//             flatten(arr[i])
            
//         }
//     }
//     return count
// }

// console.log(arr.flat(count))


function flatten1(arr) {
    let newArr = []
    arr.forEach(element => {
        if(Array.isArray(element)) {
            newArr = [...newArr, ...flatten1(element)]
        } else {
            newArr = [...newArr, element]
        }
    
    });  
    return newArr
}

console.log(flatten1(arr))