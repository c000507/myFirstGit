const veryBadWord = "bad word";
let re = new RegExp(veryBadWord, "gi");
let myString = "Hello@World, Node.js Stringsss".replace("@", " ").replace(/ss$/gi, "");
let badWord = "123 3 bad word 123 123";
if (badWord.indexOf(veryBadWord) >= 0) {
    console.log("Found a match");
    badWord = badWord.replace(re, "*****")
}

let mistype = "Spwlling";
console.log("Hello world");
console.log(5+10);
console.log(myString);
console.log(badWord);
console.log(mistype);