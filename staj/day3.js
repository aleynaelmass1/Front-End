//Truthy values
//Tüm sayılar, boş harici stringler ve bool true

//Falsy values
//0, 0n, null, undefined, NaN, bool false, boş string

let a=4
let b=10
console.log(a+=b)

//Equal operatörü
//x==y equal in value only
//x===y equal in value and datatype

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false


console.log(firstName) //not defined, because it is not assigned to a value yet

let firstName = 'Asabeneh'
let country = 'Finland'

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

const check = 4 > 3 && 10 > 5         // true && true -> true


//Pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

//Post-increment
let count2 = 0
console.log(count2++)        // 0
console.log(count2)          // 1

let isRaining2 = true
isRaining2
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining2 = false

alert(message)
alert('Welcome to 30DaysOfJavaScript')

prompt('required text', 'optional text')
let number = prompt('Enter number', 'number goes here')
console.log(number)

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

const now = new Date()
console.log(now)

const now2 = new Date()
console.log(now.getFullYear())

const now3 = new Date()
console.log(now.getMonth())


