const f1 = (array) => {
    return array.filter((item) => item % 5 === 0)
}
    
console.log(f1([1,2,5,15]))