const word = 'abAdef'

function isUnique(word) {
	const LowerCaseWord = word.toLowerCase()
    console.log(LowerCaseWord)
    const newWord = [...new Set(word.toLowerCase())].join("")
    
    if(word !== newWord) {
        return false
    }
    return true
}

console.log(isUnique(word))