# Arrays

### Getting Started

1. Fork this repo and `git clone` it down to your computer
1. Create two files `index.html` and `script.js`
1. Include `script.js` in `index.html` using a `<script>` tag
1. Open `index.html` in your web browser and open the console
1. After answering each section below, `git commit` your work
1. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request

---

### Movie Quotes

1. Create an array that contains at least three quotes from your favourite movie and store it in a variable called `quotes`.
1. console.log your second favourite quote
1. console.log your last favourite quote
1. console.log the number of quotes in your array (without hardcoding the number)
1. Change the first quote to a different one and console.log the `quotes` array

### `for` vs `for..of`

Copy and paste this array into your `script.js` file.

``` js
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```

1. Write a loop that prints out the index number of each letter and the letter itself.

    i.e.

    ``` text
    0 - a
    1 - b
    2 - c
    3 - d
    4 - e
    5 - f
    6 - g
    ```

1. Write a `for..of` loop that prints out each letter (no index numbers this time)

    i.e.

    ``` text
    a
    b
    c
    d
    e
    f
    g
    ```

---

### Sum

Copy and paste this array into your `script.js` file.

``` js
const numbers = [23, 19, 23, 52, 12]
```

1. Write a program that will loop over the `numbers` array and sum all the values in a `sum` variable. Print the resulting sum when the loop is finished.

**Hint**: You'll need to declare the `sum` variable outside of the loop (what should be the starting value?) and use a compound assignment operator inside the loop.

---

### Wild Wild Life
Copy and paste these arrays into your `script.js` file.

``` js
// name, species, age, hometown
let wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory']
let sharky = ['Sharky', 'shark', 20, 'Left Coast']
let plantee = ['Plantee', 'plant',  5000 , 'Mordor']
let porgee = ['Porgee', 'Porg', 186, 'Ahch-To']
let dart = ['D'Art' , 'Demogorgan Dog', 2, 'Upside Down']
```

1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
1. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
1. Give D'Art a second hometown by adding "Hawkins"
1. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

---

### Yell at the Ninja Turtles

Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

Loop over the ninja turtles array and console.log each turtle's name in upper case:

``` text
DONATELLO
LEONARDO
RAPHAEL
MICHAELANGELO
```

Do a web search (Google, Bing, DDG, whatever) for "javascript uppercase string" to find documentation on what it is and how to use it. As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own.
