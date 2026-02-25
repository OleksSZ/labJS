function wordsinliter(words, liter) {
    return words.filter(word => word[0].toLowerCase() === liter.toLowerCase());
}


const words = ["яблуко", "банан", "апельсин", "ананас", "вишня", "абрикос", "груша"];

console.log(wordsinliter(words, "а"));


console.log(wordsinliter(words, "Б"));


console.log(wordsinliter(words, "г"));
