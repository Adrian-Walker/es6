// #1.)
const carrots = ["bright orange", "ripe", "rotten"]

let mapVegetables = (arr) => {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot }
    })
}


console.log(mapVegetables(carrots))

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
       return person.friendly
    })
}

console.log(filterForFriendly(people))

// #3.)

let doMathSum = (a, b) => {
    return a + b
}

let produceProduct = (a, b) => {
    return a * b
}

// #4.)
let printName = (firstName = 'Jane', lastName = 'Doe', age = 100) => console.log(`Hi ${this.firstName} ${this.lastName},  how does is feel to be ${this.age}`)
