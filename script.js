// ### Movie Quotes

// 1. Create an array that contains at least three quotes from your favourite movie and store it in a variable called `quotes`.
// 1. console.log your second favourite quote
// 1. console.log your last favourite quote
// 1. console.log the number of quotes in your array (without hardcoding the number)
// 1. Change the first quote to a different one and console.log the `quotes` array

// ### `for` vs `for..of`

// Copy and paste this array into your `script.js` file.

// ``` js
// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// ```
// const quotes = ["I'll be back", "Here's trouble", "I didn't do it"]

// console.log(quotes[1]);
// console.log(quotes[2]);
// console.log(quotes.length);
// quotes[0] = "This new quote"
// console.log(quotes);


// const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i])
//     console.log(letters.indexOf(i));
// }

// for (let element of letters) {
//     console.log(element)
//     };

// // Sum

const numbers = [23, 19, 23, 52, 12]

let sum = 0;
let i = 0;
while (i < numbers.length) {
    sum += numbers[i];
    i++;
}


// console.log(sum);

// let wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory']
// let sharky = ['Sharky', 'shark', 20, 'Left Coast']
// let plantee = ['Plantee', 'plant',  5000 , 'Mordor']
// let porgee = ['Porgee', 'Porg', 186, 'Ahch-To']
// let dart = ['D\'Art', 'Demogorgan Dog', 2, 'Upside Down']

// plantee[2] = 5001;
// Wolfy[3] = `Gotham City`;
// dart.push(`Hawkins`);
// wolfy.splice(0, 1);


// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// const position = 0;

// while (position < ninjaTurtles.length) {
//     let upperCase = ninjaTurtles[].toUpperCase();
//     console.log(upperCase);
//     position++;
// }

// For (let element of ninjaTurtles) {
//     console.log(element)
//     }