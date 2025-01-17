const lowerChars = "zxcvbnmasdfghjklqwertyuiop";
const upperChars = "ZXCVBNMASDFGHJKLQWERTYUIOP";
const symbols = "!@#$%^&*()_+-=:;,.<>?/|";
const numbers = "0123456789";



const max = 16;
const min = 6;

function randomNum(){
    const length = document.getElementById("length");

    length.value = (Math.floor(Math.random() * (max - min + 1)) + min);

}

function randomize(){

}