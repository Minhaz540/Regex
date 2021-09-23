const text = "This is user1 phone number: +88-01712345678";
const newNumber = "01300000234";
const regex = /(\+88-)?01[1-9]\d{8}/g;
// return an array of matched elements
let matches = text.match(regex);
// replace the selected texts with prams text
let replacement = text.replace(regex, newNumber);
// return the index of the searched elements
let index = text.search(regex);
// return true or false for the find result
let test = regex.test(text);

console.log(matches, replacement, index, test);
