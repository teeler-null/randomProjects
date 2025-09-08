function numberDisplay() {
    // Clear previous messages
    writeToElement("overTen", "");
    writeToElement("correct", "");
    writeToElement("wrong", "");

   let input = document.getElementById("userInput").value;

    if (input === "") {
        writeToElement("correct", "You forgot to enter a number!");
        return;
    }
    let number = parseInt(input, 10);

    if (isNaN(number)) {
        writeToElement("wrong", "Please enter a valid number.");
    } else if (number > 10 || number < 1) {
        writeToElement("overTen", "Did you read the instructions?");
    } else if (number === 8) {
        writeToElement("correct", "Woohoo! You guessed the right number, " + number + imageString());
    } else {
        writeToElement("wrong", "Sorry! " + number + " is wrong... try again?<br><button id='resetBtn'>Reset</button>");
        document.getElementById("resetBtn").onclick = resetGame;
    }
}

function writeToElement(elementName, message) {
    let el = document.getElementById(elementName);
    if (el) {
        el.innerHTML = message;
    }
}

function imageString() {
    return '<br> <img src="Images/bubududu-dance.gif">';
}

function resetGame() {
    document.getElementById("userInput").value = "";
    writeToElement("wrong", "");
    writeToElement("overTen", "");
    writeToElement("correct", "");
}

// Show game after clicking Start
document.getElementById('start-btn').onclick = function() {
    document.getElementById('start-overlay').style.display = 'none';
    document.querySelector('.game-container').style.display = 'flex';
};

// Back to Main Menu button
document.getElementById('back-btn').onclick = function() {
    document.getElementById('start-overlay').style.display = 'flex';
    document.querySelector('.game-container').style.display = 'none';
    // Optionally clear input and messages
    document.getElementById('userInput').value = '';
    document.getElementById('correct').innerHTML = '';
    document.getElementById('wrong').innerHTML = '';
    document.getElementById('overTen').innerHTML = '';
};