function goToPortfolio() {
    // Scroll to the portfolio section when the button is clicked
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
}

                document.getElementById('numberButton').addEventListener('click', function() {
                    // Prompt the user for a number
                    var userInput = prompt('Enter a number between 0 and 99:');
        
                    // Check if the user entered a number
                    if (userInput !== null && !isNaN(userInput)) {
                        // Convert the input to a number
                        var number = parseInt(userInput);
        
                        // Check if the number is within the desired range
                        if (number >= 0 && number <= 99) {
                            alert('You entered: ' + number);
                        } else {
                            alert('Please enter a number between 0 and 99.');
                        }
                    } else {
                        alert('Invalid input. Please enter a valid number.');
                    }
                });
            