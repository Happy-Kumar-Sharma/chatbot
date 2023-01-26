let text = "Clam Offer Now";
let offer = text.link("https://businessara.tech");

function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "I Love BusinessAra"){
        return "Thanks, We would love to give you a very special offer " + offer
    } else {
        return "Talk with a live expert now"+ result;
    }
}