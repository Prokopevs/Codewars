function solution(str){
    if(str === "") {
      return []
    }
   
    const newArr = []
    const arr = str.split("")
    let word = ""
    for(let i=0; i<=arr.length; i++) {
        if(word.length >= 2) {
            newArr.push(word)
            word = arr[i]
            if(word && !arr[i+1]) {
            newArr.push(word + "_")
        }
        } else {
        word = word + arr[i]
        }
    }
    return newArr
 }
 
console.log(solution("abcdefr"))