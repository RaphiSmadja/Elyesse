function isPalyndrom(word) {
    let reverseWord = word.split("").reverse().join("");
    if (word == reverseWord) {
        console.log("votre mot est un palindrom");
    } else {
        console.log("votre mot n'est pas un palindrom");
    }
}

isPalyndrom("radar");
isPalyndrom("ordinateur");
isPalyndrom("non");