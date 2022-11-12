const arr = [2 , 4]

function f1(array) {
    for(let i=0; i<array.length; i++) {
        if(array[i] % 2 !== 0) {
            return false
        } 
    } 
    return true
}

console.log(f1(arr))