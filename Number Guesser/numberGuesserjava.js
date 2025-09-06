function numberDisplay() {

    let number = prompt("Guess a number between 1-10 :)", "Number goes here!");
    if (number > 10) {
        writeToElement("overTen", "Did you read the instructions?");
    }
    else if (number == 8) {
        document.getElementById("correct").innerHTML = "Woohoo! You guessed the right number, " + number + imageString();
    }
    else if (number == null) {
        document.getElementById("correct").innerHTML = "No Input is wrong... refresh and try again?";
    }
    else {
        document.getElementById("wrong").innerHTML = "Sorry! " + number + " is wrong... refresh and try again?";
    }
}

function writeToElement(elementName, message) 
{
    document.getElementById(elementName).innerHTML = message
}
function imageString() 
{
    return '<br> <img src = "Images/bubududu-dance.gif">';
}