console.log('%d %s of JavaScript', 30, 'Days')

console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow'
) // log output green red and yellow text

console.warn('This is a warning')
console.warn(
    'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
console.warn('Warning is different from error')

console.error('This is an error message')
console.error('We all make mistakes')

const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
    console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop')

console.info('30 Days Of JavaScript challenge is trending on Github')
console.info('30 Days Of fullStack challenge might be released')
console.info('30 Days Of HTML and CSS challenge might be released')

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
    let errorMessage = `${i} is not even`
    console.log('the # is ' + i)
    console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

const func = () => {
    console.count('Function has been called')
}
func()
func()
func()

try {
    // code that may throw an error
} catch (err) {
    // code to be executed if an error occurs
} finally {
    // code to be executed regardless of an error occurs or not
}

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log(err)
}

try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.error(err) // we can use console.log() or console.error()
} finally {
    console.log('In any case I will be executed')
}

const throwErrorExampleFun = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
        if (x == '') throw 'empty'
        if (isNaN(x)) throw 'not a number'
        x = Number(x)
        if (x < 5) throw 'too low'
        if (x > 10) throw 'too high'
    } catch (err) {
        console.log(err)
    }
}
throwErrorExampleFun()

let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName
console.log(fullName)

let square = 2 * 2
console.log(square)
console.log("Hello, world")

let num = 10
console.log(num.toLowerCase())

class ClassName {
    //  code goes here
}

class Person {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
        this.score = 0
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
}
const person = new Person()
console.log(person)

const person1 = new Person('Asabeneh', 'Yetayeh')
console.log(person1)
console.log(person1.getFullName())
console.log(person1.getScore)
console.log(person1.getSkills)
console.log(person1.score)
console.log(person1.skills)
console.log(Person.favoriteSkill())

class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city)
        this.gender = gender
      }
    
      saySomething() {
        console.log('I am a child of the person class')
      }
      getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
    
        let formattedSkills = skills ? `He knows ${skills}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'
    
        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
}
const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.getFullName())

const s2 = new Student(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
  )

  console.log(s2)

console.log(s2.saySomething())
console.log(s2.getFullName())

//JSON.parse(json[, reviver])
// json or text , the data
// reviver is an optional callback function
/* JSON.parse(json, (key, value) => {

})
*/

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, undefined, 4)
    console.log(usersObj)