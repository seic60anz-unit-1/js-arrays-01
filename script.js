//-------------------------------------------
// MOVIE QUOTES

const quotes = [`"Don't be shy."`, `"Live your life."`, `"Have some fun!"`]
console.log(quotes[1]) // "Live your life."
console.log(quotes[quotes.length - 1]) // "Have some fun!"
console.log(quotes.length) // 3

quotes[0] = `"That's my job."`
console.log(quotes) //["That's my job.", "Live your life", "Have some fun!"]


const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// for loop
for (let i = 0; i < letters.length; i++) {
    console.log(`${i} - ${letters[i]}`)
}

// for..of loop
for (let letter of letters) {
    console.log(letter)
}

//-------------------------------------------
// SUM

const numbers = [23, 19, 23, 52, 12]
let sum = 0

for (let number of numbers) {
    sum += number
}
console.log(sum)

//-------------------------------------------
// WILD WILD LIFE

// name, species, age, hometown
let wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory']
let sharky = ['Sharky', 'shark', 20, 'Left Coast']
let plantee = ['Plantee', 'plant',  5000 , 'Mordor']
let porgee = ['Porgee', 'Porg', 186, 'Ahch-To']
let dart = ['D\'Art' , 'Demogorgan Dog', 2, 'Upside Down']

// 1.
plantee[2]++
console.log(plantee)

// 2.
wolfy[wolfy.length - 1] = 'Gotham City'
console.log(wolfy)

// 3. (placed the 2 hometowns in a nested array)
dart[dart.length - 1] = [dart[dart.length - 1], 'Hawkins']
console.log(dart)

// 4. 
wolfy[0] = 'Gameboy'
console.log(wolfy)

//-------------------------------------------
// YELL AT THE NINJA TURTLES

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (let member of ninjaTurtles) {
    console.log(member.toUpperCase())
}