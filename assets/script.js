var capital = ['A', 'B', 'C', 'D', 'E', 'F', 'G,', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var symbol = ['!', '@', '#', '$', '%', '&', '*',]
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var questions = [
    { q: 'Does your password require a capital letter?', n: capital },
    { q: 'Does your password require a lower case?', n: lower },
    { q: 'Does your password require a symbol?', n: symbol },
    { q: 'Does your password require a number?', n: number },
];

function generatePassword() {
    var possible = []
    var passlength = prompt("How long you want the password to be? (8-128)")
    if (passlength < 8 || passlength > 128) {
        alert("Number needs to be between 8 or 128")
        return;
    }
    // Loop over every question object
    for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel
        var answer = confirm(questions[i].q);
        if (answer === true) {
            possible = possible.concat(questions[i].n)
        }
    }
    if (possible.length === 0) {
        alert("You need to pick at least one");
        return
    }
    console.log(possible)
    var password = ""
    for (var i = 0; i < passlength; i++) {
        var num = Math.floor(Math.random() * possible.length)
        var char = possible[num]
        password = char + password
    }
    return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generateBtn");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);