const lowerChars = "zxcvbnmasdfghjklqwertyuiop";
const upperChars = "ZXCVBNMASDFGHJKLQWERTYUIOP";
const symbols = "!@#$%^&*()_+-=:;,.<>?/|";
const numbers = "0123456789";


const max = 20;
const min = 8;

function randomNum(){
    const length = document.getElementById("length");
    length.value = (Math.floor(Math.random() * (max - min + 1)) + min);

}

function randomize(){
    const lower = document.getElementById("lowerCase");
    const upper = document.getElementById("upperCase");
    const sym = document.getElementById("symBols");
    const nums = document.getElementById("numBers");

    let allowedChars = "";

    allowedChars += lower.checked ? lowerChars : "";
    allowedChars += upper.checked ? upperChars : "";
    allowedChars += sym.checked ? symbols : "";
    allowedChars += nums.checked ? numbers : "";

}