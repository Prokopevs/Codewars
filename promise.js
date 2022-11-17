const hello = () => {
    console.log("hello")
    }
    
    const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
    console.log("right")
    resolve()
    }, 2000)
    
    })
    
    promise.then(hello)