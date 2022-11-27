const all = (w1, w2) => {
    const word1 = w1.toLowerCase().split("").sort().join("")
    const word2 = w2.toLowerCase().split("").sort().join("")
    return word1 === word2
}
    
console.log(all("hello","Hel"))