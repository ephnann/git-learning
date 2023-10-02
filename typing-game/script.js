const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

// Add a variable to track game progress
let gameInProgress = false;

// Function to disable the 'input' event listener
function disableInputListener() {
    typedValueElement.removeEventListener('input', inputEventListener);
}

// Function to enable the 'input' event listener
function enableInputListener() {
    typedValueElement.addEventListener('input', inputEventListener);
}

document.getElementById('start').addEventListener('click', () => {
    // Disable the button to prevent starting a new game while the current one is in progress
    document.getElementById('start').disabled = true;

    // Check if the game is already in progress
    if (!gameInProgress) {
        // Set the game in progress
        gameInProgress = true;

        // Retrieve the elapsed time from localStorage
        const storedElapsedTime = localStorage.getItem('elapsedTime');

        // Display the stored elapsed time if it exists
        if (storedElapsedTime) {
            const storedTimeInSeconds = parseFloat(storedElapsedTime) / 1000;
            messageElement.innerText = `Your previous time: ${storedTimeInSeconds} seconds`;

            // Create a new <li> element to display the previous time
            const previousTimesList = document.getElementById('previousTimes');
            const listItem = document.createElement('li');
            listItem.textContent = `Previous Time: ${storedTimeInSeconds} seconds`;

            // Append the <li> element to the <ul> element
            previousTimesList.appendChild(listItem);
        }

        // get a quote
        const quoteIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[quoteIndex];
        // Put the quote into an array of words
        words = quote.split(' ');
        // reset the word index for tracking
        wordIndex = 0;

        // UI updates
        // Create an array of span elements so we can set a class
        const spanWords = words.map(function (word) { return `<span>${word} </span>` });
        // Convert into string and set as innerHTML on quote display
        quoteElement.innerHTML = spanWords.join('');
        // Highlight the first word
        quoteElement.childNodes[0].className = 'highlight';
        // Clear any prior messages

        // Setup the textbox
        // Clear the textbox
        typedValueElement.value = '';
        // set focus
        typedValueElement.focus();
        // set the event handler

        // Start the timer
        startTime = new Date().getTime();

        // Enable the 'input' event listener
        enableInputListener();
    }
});

// Define the 'input' event listener function separately
function inputEventListener() {
    // Get the current word
    const currentWord = words[wordIndex];
    // get the current value
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        // end of sentence
        // Calculate the elapsed time in milliseconds
        const elapsedTime = new Date().getTime() - startTime;

        // Save the elapsed time to localStorage
        localStorage.setItem('elapsedTime', elapsedTime);

        // Display the success message in the modal dialog
        showModal(messageElement.textContent);

        // ... (your existing code)
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        // ... (your existing code)
    } else if (currentWord.startsWith(typedValue)) {
        // ... (your existing code)
    } else {
        // ... (your existing code)
    }
}

// Define a function to show the modal dialog
function showModal(message) {
    const modal = document.getElementById('myModal');
    const successMessage = document.getElementById('successMessage');

    // Set the success message inside the modal
    successMessage.textContent = message;

    // Show the modal
    modal.style.display = 'block';

    // Add an event listener to close the modal when the close button is clicked
    const closeModalButton = document.getElementById('closeModal');
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Add an event listener to close the modal when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
