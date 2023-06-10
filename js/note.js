// Save Note

let btnSave = document.getElementById("save");
let inputWords = document.getElementById("text");
let divDisplay = document.getElementById("saved");

showWords();

btnSave.addEventListener("click", function () {
    localStorage.words = inputWords.value;
    showWords();
});

function showWords() {
    let displayWords = localStorage.words || "Your Note";
    divDisplay.textContent = displayWords;

}