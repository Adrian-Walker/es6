// #1.)
const carrots = ["bright orange", "ripe", "rotten"]

let mapVegetables = (arr) => {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}

// #2.)
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

let filterForFriendly = (arr) => {
    arr.filter((person) => {
        person.friendly
    })
}

// #3.)

let doMathSum = (a, b) => {
    return a + b
}

let produceProduct = (a, b) => {
    return a * b
}

// #4.)
let printName = () => {
    
}
