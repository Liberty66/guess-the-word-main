const guessedLetters = document.querySelector(".guessed-letters");
const guess = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAagain = document.querySelector(".play-again");

const word = "magnolia";

//Write a Function to Add Placeholders for Each Letter of the word
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word){
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

guess.addEventListener("click", function(e){
    e.preventDefault();
    const guessWord = textInput.value;
    console.log(guessWord);
    textInput.value=""
});
