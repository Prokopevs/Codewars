const arr = ["a", "e", "i", "o", "u"]
const word = "urewqg"

const foo = (arr, word) => {
    const newWord = word.toLowerCase().split("")
    let sum = 0
    for(let i=0; i<newWord.length; i++) {
        if(arr.includes(newWord[i])) {
        sum++
        }
    }   
    console.log(sum)
}

foo(arr, word)