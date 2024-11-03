const quotes = Array.from(document.querySelectorAll('.quote'));
let currentIndex = 0;

// Shuffle function for random display order
function shuffleQuotes(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the quotes at the beginning
shuffleQuotes(quotes);

function showNextQuote() {
  // Hide the current quote
  quotes[currentIndex].classList.remove('active');

  // Update to the next quote with wrap-around
  currentIndex = (currentIndex + 1) % quotes.length;

  // Show the next quote
  quotes[currentIndex].classList.add('active');
  
  // Set a random interval between 3 to 7 seconds for the next quote
  const randomInterval = Math.floor(Math.random() * (7000 - 3000 + 1) + 3000);
  setTimeout(showNextQuote, randomInterval);
}

// Start the carousel
setTimeout(showNextQuote, 3000);