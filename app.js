var userWord = prompt("Digite uma palavra para criptografar!");
if (userWord !== ""){
  cipher(userWord);
} else {
  alert("Digite a palavra...");
  userWord = prompt("Digite uma palavra para criptografar!");
  console.log(userWord);

  cipher(userWord);
}

function cipher(str){
  var encryptedWord = "";
  console.log(encryptedWord);
  if((str === '') || (typeof str === "number")){
    alert("Campo inválido");
  }

  for(var i = 0; i < str.length; i++){
    var char = str.charCodeAt(i);
    console.log(char);
    if((char >= 65) && (char <= 90)){
      encryptedWord += String.fromCharCode((char - 65 + 7) % 26 + 65);
    } else {
      encryptedWord += String.fromCharCode((char - 97 + 7) % 26 + 97);
    }
  }

  return encryptedWord;
  console.log(encryptedWord);
}


function decipher(word){
  var encrypted = "";
  console.log(encrypted);
  for(var x = 0; x < word.length; x++){
    var charCode = word.charCodeAt(x);
    console.log(charCode);
    if((charCode >= 65) && (charCode <=90)){
    encrypted += String.fromCharCode((charCode - 65 - 7) % 26 + 65);
  } else {
    encrypted += String.fromCharCode((charCode - 65 - 7) % 26 + 65);
  }
  }

  return encrypted;
  console.log(encrypted);
}
var frase = (userWord);
console.log("Frase: " + frase);
//console.log("Frase descriptografada: " + decipher(cipher(frase)));
console.log("Frase criptografada: " + cipher(frase));
console.log();

frase = (userWord);
console.log("Frase: " + frase);
console.log("Frase criptografada: " + cipher(frase));
console.log("Frase descriptografada: " +  decipher(cipher(frase)));
