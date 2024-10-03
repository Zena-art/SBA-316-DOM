// Variables
let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Query Selector for the form and input
let nameInput = document.querySelector('#name-input');
let nameForm = document.querySelector('#name-form');
let guessInput = document.querySelector('#guess-input'); // Caching the guess input
let guessForm = document.querySelector('#guess-form');   // Caching the guess form
let guessesList = document.querySelector('#guesses-list');
let greetingMessage = document.querySelector('#greeting'); // Caching the greeting paragraph

// Event Listeners
openBtn.addEventListener('click', function() {
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
    resetGame(); // Reset the game when the modal is closed
});

window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
        resetGame(); // Reset the game when the modal is closed
    }
});

// Guessing Game Logic
let randomNumber; // Declare randomNumber outside to maintain state
let tries = 0;    // Initialize the number of tries

nameForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const userName = nameInput.value.trim();
  
    // Check if the name contains only letters and spaces
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(userName)) {
        alert("Please enter a valid name (letters and spaces only).");
        nameInput.value = ''; // Clear the name input if invalid
        return;
    }

    // Show greeting and prepare for guessing
    greetingMessage.innerText = `Hello ${userName}! Let's play a guessing game!`;
    greetingMessage.style.display = 'block'; // Show greeting
    guessForm.style.display = 'block'; // Show guess input
    nameInput.value = ''; // Clear name input for a better user experience

    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate new random number when user submits name
    tries = 0; // Reset tries for new game
    nameForm.style.display = 'none'; // Hide name form after entering the name
});

// Guessing logic
guessForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    const userGuess = parseInt(guessInput.value);
  
    // Validate input
    if (userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    tries++; // Increment the tries count
    const guessItem = document.createElement('li');

    if (userGuess === randomNumber) {
        guessItem.innerText = `${greetingMessage.innerText} guessed ${userGuess} - Correct!`;
        alert(`Congratulations! You guessed the correct number!`);
        resetGame(); // Reset game after a correct guess
    } else {
        guessItem.innerText = `Guessed ${userGuess} - Try again!`;
    }

    guessesList.appendChild(guessItem);
    guessInput.value = ''; // Clear input after guess

    // Check if tries exceed the limit
    if (tries >= 10) {
        alert("You've exceeded the maximum number of tries! The correct number was " + randomNumber + ".");
        resetGame(); // Reset the game after exceeding tries
    }
});

// Function to reset game state
function resetGame() {
    nameInput.value = ''; 
    guessInput.value = '';
    guessesList.innerHTML = '';
    greetingMessage.style.display = 'none'; // Hide greeting
    guessForm.style.display = 'none'; // Hide guess form
    nameForm.style.display = 'block'; // Show name form again when reset
}
