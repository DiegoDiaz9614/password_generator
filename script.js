function generatePass(){
    let lowerChars = "abcdefhijklmnopqrstuvwxyz"
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numChars = "0123456789"
    let specialChars = "!@#$%^&*()_+{};~?,./";
}

let length = parseInt(document.querySelector("#length").value);
let addUpper = document.querySelector("#uppercase").checked;
let addNumbers = document.querySelector("#numbers").checked;
let addSymbols = document.querySelector("#symbol").checked;

if (addUpper) charSet += upperChars;
if (addNumbers) charSet += numChars;
if (addSymbols) charSet += specialCHars;

