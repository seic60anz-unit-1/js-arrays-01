// Movie Quotes
let quotes = ['Hello world','Hey! Morty','Wubba Lubba dub-dub','May the Force be with you.']
console.log(quotes[1])
console.log(quotes[quotes.length-1])
console.log(quotes.length)
quotes[0] = 'Hey bro'
console.log(quotes)

// for vs for..of
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
for(let i =0; i<letters.length; i++){
    console.log(`${i} - ${letters[i]}`)
}
for(let element of letters){
    console.log(element)
}

// Sum
const numbers = [23, 19, 23, 52, 12]
let sum = 0;
for(let i =0; i<numbers.length; i++){
    sum = sum + numbers[i]
}
console.log(sum)

// Wild Wild Life
// name, species, age, hometown
let wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory']
let sharky = ['Sharky', 'shark', 20, 'Left Coast']
let plantee = ['Plantee', 'plant',  5000 , 'Mordor']
let porgee = ['Porgee', 'Porg', 186, 'Ahch-To']
let dart = ['D\'Art' , 'Demogorgan Dog', 2, 'Upside Down']

plantee[2]= plantee[2]+1
wolfy[3] = "Gotham City"
dart.push("Hawkins")
delete wolfy[0]

console.log(wolfy)
console.log(sharky)
console.log(plantee)
console.log(porgee)
console.log(dart)

// Yell at the Ninja Turtles
const ninjaTurtles =['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for(let i = 0; i<ninjaTurtles.length;i++){
    console.log(ninjaTurtles[i].toUpperCase())
}