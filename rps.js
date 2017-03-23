var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock?");
var computerChoice = Math.random();
var userChoice = prompt("Do you choose rock, paper,scissors,lizard, spock?");

if (computerChoice < 0.2) {
    computerChoice = "rock";
} else if (computerChoice <= 0.4) {
    computerChoice = "paper";
} else if (computerChoice <= 0.6) {
    computerChoice = "scissors";
} else if (computerChoice <= 0.8) {
    computerChoice = "lizard";
} else {
    computerChoice = "spock";
}

alert("The computer chose " + computerChoice);

var compare = function(choice1, choice2){

};
    if (choice1 === choice2) {
        alert("And... It's a tie!");
    }
    