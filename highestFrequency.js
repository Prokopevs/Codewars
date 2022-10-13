const array = ['a', 'b', 'c', 'c', 'd', 'd', 'd', 'e']

function highestFrequency(array) {
    let letter = []
    for(let i=0; i<=array.length - 1; i++) {
        let a = array.filter(el => el === array[i])
        if(a.length > letter.length) {
            letter = a
        }
    }
    return letter[0]
}   

console.log(highestFrequency(array))