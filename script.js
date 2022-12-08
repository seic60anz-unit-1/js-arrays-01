//Movie Quotes
// const quotes = ["Blind Chance",
// "Vertigo", "Santa Sangre", "Trafic"]
// console.log(quotes[1])
// console.log(quotes[quotes.length - 1])
// console.log(quotes.length)
// quotes[0] = "Good Morning"
// console.log(quotes) //Movie quotes are too long, so I put movie names as quotes instead

//for vs for..of
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
for (let i = 0; i < letters.length; i++){
    console.log(`${i} - ${letters[i]}`)
}
for (let i of letters){
    console.log(i)
}
