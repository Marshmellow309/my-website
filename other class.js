// const one = [1, 2, 3]
// const two = [4, 5, 6];
// const numbers = [...one, ...two]

// const fruit = {
//     type: 'banana',
//     make:'agric',
//     color:'green'
// }

// const car = {
//     type: 'honda',
//     year: '2015',
//     example: 'hola'
// }

// const joinedObjects = {...fruit, ...car}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//destructure
const [a, b, ...rest] = numbers

console.log(rest)

const person = {
    name: 'john'
    age: 44,
    height: 4.4,
    gender: 'male',
}

//const {name, age } = person
// const {name:personName, age: personAge} = person 
// console.log(personName)
