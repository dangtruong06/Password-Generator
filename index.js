const lowerChars = "zxcvbnmasdfghjklqwertyuiop";
const upperChars = "ZXCVBNMASDFGHJKLQWERTYUIOP";
const symbols = "!@#$%^&*()_+-=:;,.<>?/|";
const numbers = "0123456789";
const length = document.getElementById("length");


const max = 20;
const min = 8;

function randomNum(){
    length.value = (Math.floor(Math.random() * (max - min + 1)) + min);

}

function randomize(){
    const lower = document.getElementById("lowerCase");
    const upper = document.getElementById("upperCase");
    const sym = document.getElementById("symBols");
    const nums = document.getElementById("numBers");
    const displayPass = document.getElementById("password")

    let allowedChars = "";
    let index = 0;
    let randPass = "";

    allowedChars += lower.checked ? lowerChars : "";
    allowedChars += upper.checked ? upperChars : "";
    allowedChars += sym.checked ? symbols : "";
    allowedChars += nums.checked ? numbers : "";

    if(length.value >= 1 && length.value <= 20){
        if(lower.checked || upper.checked || sym.checked || nums.checked){
            for(let i = 0; i < length.value; i++){
                index = Math.floor(Math.random() * allowedChars.length);
                randPass += allowedChars[index];
            }
            displayPass.textContent = `Generated Password: ${randPass}`;
        }
        else{
            displayPass.textContent = `Check at least 1 character option`;
        }
    }
    else{
        displayPass.textContent = "Enter a length between 1-20 characters";
    }
}