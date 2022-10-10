function isStringRotated(source, test) {
    const newWord = source.split("").reverse().join("")
    return newWord === test ? true : false
}

console.log(isStringRotated('tpircsavaj', 'javascript'))

