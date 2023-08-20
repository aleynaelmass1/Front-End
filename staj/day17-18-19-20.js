localStorage.setItem('key', 'value')
localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)
localStorage.setItem('age', 200)
console.log(localStorage)

const skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

let skills2 = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills2)
localStorage.setItem('skills', skillJSON)

localStorage.getItem('key')
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills3 = localStorage.getItem('skills')
console.log(firstName, age, skills3)

localStorage.clear()

const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
  })

  const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))

    const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error))

  const square = async function (n) {
    return n * n
  }
  
  square(2)

  const square2 = async function (n) {
    return n * n
  }
  const value = await square2(2)
  console.log(value)

  function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)