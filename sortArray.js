function sortArray(array) {
    const newArr = array.filter((item) => item%2 !== 0).sort((a, b) => a-b)
    console.log(newArr)
    for(let i=0; i<array.length; i++) {
        if(array[i]%2 === 0){
            newArr.splice(i, 0, array[i])
        }
    }
    return newArr
  }
  
console.log(sortArray([5, 3, 2, 8, 1, 4]))