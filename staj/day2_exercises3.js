let sentence="Love is the best thing in this world. Some found their love and some are still looking for their love"
let count=(sentence.match(/love/gi) || []).length
console.log(count)

let sentence2="You cannot end a sentence with because because because is a conjunction"
let count2=(sentence2.match(/because/gi) || []).length
console.log(count2)

let sentence3="%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"
let cleanSentence3=sentence3.replace(/[^a-zA-z]/g, " ")
let words=cleanSentence3.split(' ')
let wordCounts={}
for(let i=0; i<words.length; i++){
    if(words[i]!== ''){
        wordCounts[words[i]]=(wordCounts[words[i]] || 0) + 1
    }
}
let maxWord = ''
let maxCount = 0
for(let word in wordCounts) {
    if(wordCounts[word] > maxCount) {
        maxCount = wordCounts[word]
        maxWord = word
    }
}

console.log(`Most frequent word is '${maxWord}' with count ${maxCount}`)