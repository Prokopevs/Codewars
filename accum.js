const f1 = (letter, count) => {
    let word = ""
    for(let i=0; i<count; i++) {
        word = word + letter
    }
    return word+"-"
  }
  
function accum(s) {
    const arr = s.split("")
    let str = ""
    for(let i=0; i<arr.length; i++) {
        str = str + arr[i].toUpperCase() + f1(arr[i].toLowerCase(), arr.indexOf(arr[i]))
    }
    return str
}

console.log(accum("ZpglnRxqenU"))