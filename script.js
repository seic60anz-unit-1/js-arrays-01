// Movie quotes 

const movieQuotes = [
    "Harry Potter and the Philosopher's Stone", 
    "The Lord of Rings", 
    "The Godfather"
    ]

console.log(movieQuotes[1])
console.log(movieQuotes[movieQuotes.length -1])
console.log(movieQuotes.length)
movieQuotes[0] = "The Matrix"

// for VS for .. of 
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

for (let i = 0; i < letters.length; i++) {
    console.log(`${i} - ${letters[i]}`)
}

for (let val of letters) {
    console.log(val)
}

sum
const numbers = [23, 19, 23, 52, 12]; 
sum = 0; 
for (let num of numbers) {
    sum += num;
}
console.log(sum)

// Wild Wild Life 
name, species, age, hometown
let wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory']
let sharky = ['Sharky', 'shark', 20, 'Left Coast']
let plantee = ['Plantee', 'plant',  5000 , 'Mordor']
let porgee = ['Porgee', 'Porg', 186, 'Ahch-To']
let dart = ['D\'Art' , 'Demogorgan Dog', 2, 'Upside Down']

console.log(plantee[2] = plantee[2] + 1 )
console.log(wolfy[wolfy.length - 1] = "Gotham City")
console.log(dart.push("Hawkins"))
console.log(wolfy[0] = "Gameboy")

// Yell at the Ninja Turtles
const ninjaTurtles = [
    "Donatello", 
    "Leonardo", 
    "Raphael", 
    "Michaelangelo"
]

for (let val of ninjaTurtles){
    console.log(val.toUpperCase())
}