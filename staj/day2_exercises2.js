let quote1="The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote1)

let quote2="Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quote2)

let num='10'
if(typeof num!== typeof 10){
    num=Number(num)
}
console.log(num, typeof num)

let floatNum=parseFloat('9.8')
if(floatNum!==10){
    floatNum=Math.ceil(floatNum)
}
console.log(floatNum)

console.log('python'.includes('on')&&'jargon'.includes('on'))

let sentence="I hope this course is not full of jargon."
console.log(sentence.includes('jargon'))

let number=Math.random()*101
console.log(Math.floor(number))

let number2=(Math.random()*51)+50
console.log(Math.floor(number2))

let number3=Math.random()*256
console.log(Math.floor(number3))

let string='Javascript'
console.log(string.charAt(Math.floor(Math.random()*string.length)))

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

let sentence2="You cannot end a sentence with because because because is a conjunction"
console.log(sentence2.substring(0,31) + sentence2.substring(55,71))

