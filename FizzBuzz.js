// function foo (number) {
//     if(number%5 === 0) {
//         if(number%3 === 0) {
//             console.log("FizzBuzz")
//         }
//     } else if(number%5 === 0) {
//         console.log("Buzz")
//     } else if(number%3 === 0) {
//         console.log("Fizz")
//     } else {
//         console.log(number)
//     }
// }

// for (let i=0; i<100; i++) {
//     foo(i)
// }

for (let i=0; i<100; i++) {
    if(i%5 === 0 || i%3 === 0) {
        if(i%5 === 0 && i%3 === 0) {
            console.log("FizzBuzz");
            continue;
        }
        if(i%5 === 0) {
            console.log("Buzz")
        }
        if(i%3 === 0) {
            console.log("Fizz")
        }
    } else {
        console.log(i)
    }
}