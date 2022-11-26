const word = "ana"

const foo = (word) => {
    const reverse = word.split("").reverse().join("")
    if (word === reverse) {
    console.log("ok")
    } else {
    console.log("no ok")
    }
}

foo(word)