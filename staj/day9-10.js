// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))

// Higher order function returning an other function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

function callback() {
    // code goes here
}
setInterval(callback, duration)
function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000)

function callback() {
    // code goes here
}
setTimeout(callback, duration)

arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)

const modifiedArray = arr.map(function (element, index, arr) {
    return element
})
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers2 = [1, 2, 3, 4, 5]
const numbersSquare = numbers2.map((num) => num * num)

console.log(numbersSquare)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

const countriesFirstThreeLetters = countries.map((country) =>
    country.toUpperCase().slice(0, 3)
)

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
    country.includes('land')
)
console.log(countriesContainingLand)

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

arr.reduce((acc, cur) => {
    // some operations goes here before returning a value
    return
}, initialValue)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

const age2 = ages.findIndex((age) => age < 20)
console.log(age2)

const bools = [true, true, true, true]

const areSomeTrue = bools.some((b)
console.log(areSomeTrue)

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())

const numbers = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
    return a - b
})

console.log(numbers4) // [3.14, 9.81, 37, 100]

numbers4.sort(function (a, b) {
    return b - a
})
console.log(numbers4)

objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
})

// or

objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
})

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(users)

const companies = new Set()
console.log(companies)
Set(0) { }

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

for (const language of setOfLanguages) {
    console.log(language)
}

const companies2 = new Set() // creating an empty set
console.log(companies2.size)

companies2.add('Google') // add element to the set
companies2.add('Facebook')
companies2.add('Amazon')
companies2.add('Oracle')
companies2.add('Microsoft')
console.log(companies2.size) // 5 elements in the set
console.log(companies2)

console.log(companies2.delete('Google'))
console.log(companies2.size)

console.log(companies2.has('Apple')) // false
console.log(companies2.has('Facebook')) // true

companies.clear()
console.log(companies)

const map = new Map()
console.log(map)

const map = new Map(countries)
console.log(map)
console.log(map.size)

const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

console.log(countriesMap.get('Finland'))

console.log(countriesMap.has('Finland'))

