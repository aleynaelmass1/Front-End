let challenge='30 days of javascript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.substr(0, challenge.lastIndexOf(' ')))
console.log(challenge.substr(challenge.indexOf(' ') + 1))
console.log(challenge.includes('script'))
console.log(challenge.split())
console.log(challenge.split(' '))
console.log(challenge.replace('javascript', 'python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(challenge.indexOf('j')))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('python'))
console.log(challenge.match(/a/g))
console.log(challenge.repeat(3))

let string='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','))

let sentence='You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

let challengeWithSpaces=' 30 days of javascript '
console.log(challengeWithSpaces)
console.log(challengeWithSpaces.trim())

let part1='30 days of'
let part2='javascript'
console.log(part1.concat(' ', part2))
