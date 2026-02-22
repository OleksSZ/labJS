let words = ["Привіт", "як", "справи", "?"];

let result = "";
for (let i = 0; i < words.length; i++) {
    if (i > 0) {
        result += " ";
    }
    result += words[i];
}

console.log(result);  
// "Привіт як справи ?"