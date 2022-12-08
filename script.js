//Movie quotes

const quotes = [
    'You should never underestimate the predictability of stupidity.',
    'Hence the expression, "as greedy as a pig".',
    'I thought you said he was a getaway driver. What the f--- can he get away from, eh?'
]

console.log(quotes[1])
console.log(quotes[2])
console.log(quotes.length);
quotes[0] = 'I don\'t want that dog dribbling on my seats.'
console.log(quotes[0]);

//for vs for..of

const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g'
]

for (let i=0; i<letters.length; i++) {
    
    console.log(`${i} - ${letters[i]}`);
}

for (let element of letters) {
    console.log(element);
}

// sum

const numbers = [
    23, 
    19, 
    23, 
    52, 
    12
]

let sum = 0
for (let i = 0; i<numbers.length; i++){
    sum = sum += numbers[i]
}
console.log(sum);

// Wild Wild Life

// name, species, age, hometown
let wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory']
let sharky = ['Sharky', 'shark', 20, 'Left Coast']
let plantee = ['Plantee', 'plant',  5000 , 'Mordor']
let porgee = ['Porgee', 'Porg', 186, 'Ahch-To']
let dart = ['D\'Art' , 'Demogorgan Dog', 2, 'Upside Down']

plantee[2] = 5001
wolfy[3] = "Gotham City"
dart[3] = 'Upside Down, Hawkins'
wolfy[0] = 'Gameboy'

console.log(plantee)
console.log(wolfy)
console.log(dart)

//Yell at the Ninja Turtles

const ninjaTurtles = [
    'Donatello',
    'Leonardo',
    'Raphael',
    'Michaelangelo'
    ]

for (let i=0;i<ninjaTurtles.length;i++){
    let result = ninjaTurtles[i].toUpperCase();
    console.log(result);
}
