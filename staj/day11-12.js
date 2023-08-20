const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

let [numOne, , numThree] = numbers //2 is omitted

  console.log(numOne, numThree)


const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  
  console.log(frontEnd)
  console.log(backEnd)

  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter)

  let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p)

const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  
  console.log(calculatePerimeter(rect))

  // without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

let flag = 'gi'
let regEx2 = new RegExp(pattern, flag)

let regEx3= /love/gi
let regEx4= new RegExp('love','gi')

const str = 'I love JavaScript'
const pattern2 = /love/
const result = pattern2.test(str)
console.log(result)

