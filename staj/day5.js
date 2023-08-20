const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)

let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript)

const numbers2 = [1, 2, 3, 4, 5]
numbers2[0] = 10      // changing 1 at index 0 to 10
numbers2[1] = 20      // changing  2 at index 1 to 20

console.log(numbers2) //

const arr2 = Array() // creates an an empty array
console.log(arr2)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues)

const numbers3 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers3.lastIndexOf(2))
console.log(numbers3.includes(5))
console.log(Array.isArray(numbers3))
console.log(numbers3.toString())




