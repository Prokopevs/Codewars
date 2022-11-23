let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
    
    const foo = (salaries) => {
    const result = Object.values(salaries)
    console.log(result)
    }
    
foo(salaries)