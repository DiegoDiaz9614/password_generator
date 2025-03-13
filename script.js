function generatePass() {
  let lowerChars = "abcdefhijklmnopqrstuvwxyz";
  let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numChars = "0123456789";
  let specialChars = "!@#$%^&*()_+{};~?,./";

  let length = parseInt(document.querySelector("#length").value);
  //added for fun
  if (length <= 8) {
    length = 8;
    document.querySelector("#length").value = length;
  } else if (length > 20) {
    length = 20;
    document.querySelector("#length").value = length;
  }
  let addUpper = document.querySelector("#uppercase").checked;
  let addNumbers = document.querySelector("#numbers").checked;
  let addSymbols = document.querySelector("#symbols").checked;

  let charSet = lowerChars;

  if (addUpper) charSet += upperChars;
  if (addNumbers) charSet += numChars;
  if (addSymbols) charSet += specialChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  document.querySelector("#password").value = password;
}
document.querySelector("#generate").addEventListener("click", generatePass);
