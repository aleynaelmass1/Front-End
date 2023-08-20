document.getElementsByTagName('tagname')
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}

document.getElementsByClassName('classname')
const allTitles2 = document.getElementsByClassName('title')

console.log(allTitles2) //HTMLCollections
console.log(allTitles2.length) // 4

for (let i = 0; i < allTitles2.length; i++) {
  console.log(allTitles2[i]) // prints each elements in the HTMLCollection
}

document.getElementById('id')
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>

/*let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstTitle = document.querySelector('#first-title') // select id with first-title
let firstTitle = document.querySelector('.title') // select the first available element with class title
*/

const allTitles = document.querySelectorAll('h1') # selects all the available h1 elements in the page

console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))
const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class

const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'

const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')

//another way to setting an attribute
titles[3].className = 'title'
titles[3].id = 'fourth-title'

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')

//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove('title', 'header-title')

const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'

const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.fontSize = '20px'
  } else {
    title.style.fontSize = '30px'
  }
})

