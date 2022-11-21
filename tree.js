const data = [
    {
        id: "5",
        children: [
            {
                id: "10",
                children: [
                    {
                        id: "11",
                    }
                ]
            },
            {
                id: "7",
                children: [
                    {
                        id: "5",
                        children: [
                            {
                                id: "1"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const getAllItems = (tree) => {
    let arr = []
    tree.forEach((item) => {
        arr.push(item.id)
        if(item.children) {
            arr=[...arr, ...getAllItems(item.children)]
        }
    })

    return arr
}

console.log(getAllItems(data))