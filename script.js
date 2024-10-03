// Variables
//Cached at least one element using getElementById
let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById("close-btn");
// Query Selector for the form and input
let nameInput = document.querySelector('#name-input'); 
let nameForm = document.querySelector('#name-form');   
let guessesList = document.querySelector('#guesses-list'); 

// Event Listeners

openBtn.addEventListener('click', function() {
  modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modalContainer.style.display = 'none';
});
