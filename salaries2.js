let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
    
    const foo = (salaries) => {
    let sum = 0
    for(let value in salaries) {
    sum += salaries[value]
    }
    console.log(sum)
}
    
foo(salaries)