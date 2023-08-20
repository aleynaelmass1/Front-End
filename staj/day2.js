/*Primitive datatypes
Numbers, strings, booleans, null, undefined*/

/*Non-primitive datatypes
Objects, functions, arrays */

let word = 'JavaScript'

word[0] = 'Y'

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)

let js = 'Javascript'
let py = 'Python'
console.log(js == py)

//NON-PRIMITIVE DATATYPES
let nums = [1, 2, 3]
console.log(nums)
console.log(nums[0])

nums[0] = 0
console.log(nums[0])
console.log(nums)

//NUMBERS AND MATH OBJECT
const PI = Math.PI
console.log(PI)
console.log(Math.round(PI))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))

console.log(Math.max(-5, 0, 1, 2, 33))
console.log(Math.min(-5, 0, 1, 2, 33))

console.log(Math.random())//0 ve 1 arasında
console.log(Math.random() * 11)//0-10 arasında

//Mutlak değer
console.log(Math.abs(-5))

//Karekök
console.log(Math.sqrt(100))

//Üs
console.log(Math.pow(3, 2))

//Logaritma (e tabanında)
console.log(Math.log(10))

//Trigonometri
console.log(Math.sin(60))

//Random Number Generator
let randomNum = Math.random()
let numBtnZeroAndTen = randomNum * 11
console.log(numBtnZeroAndTen)

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)

//STRINGS
let space = ' ' //boşluk stringi

//String Birleştirme
let firstName = "Aleyna"
let lastName = "Elmas"

let fullName = firstName + space + lastName
console.log(fullName)

//Uzun stringler
const paragraph = "paragraf paragraf paragraf\
 paragraf paragraf paragraf\
 paragraf paragraf paragraf\
 paragraf paragraf paragraf\
 paragraf paragraf paragraf\
 paragraf paragraf paragraf\
 paragraf paragraf paragraf\
 paragraf paragraf paragraf"

console.log(paragraph)

console.log('Days\tTopics\tExercises')
console.log('Days\nTopics\nExercises')

/*Template Strings
let firstName2='Aleyna'
let lastName2='Elmas'
let fullName2=´${firstName2} ${lastName2}´
console.log(fullName2)*/

//String Methods
console.log(js.length)
console.log(js[0])
console.log(js.toLowerCase())
console.log(js.toUpperCase())
console.log(js.substr(4,6))
console.log(py.substr(0,3))
console.log(js.substring(0,4))//start and end
console.log(fullName.split(' '))//diziye dönüştü
console.log(fullName.trim())
console.log(fullName.includes('Elmas'))//içeriyorsa true, içermiyorsa false
console.log(fullName.replace('Aleyna', 'Elmas'))
console.log(js.charAt(7))
console.log(js.charCodeAt(7))//ASCII value

