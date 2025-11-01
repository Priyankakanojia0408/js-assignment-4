function guessNumberGame() {
  const secret = Math.floor(Math.random() * 10) + 1; // random number between 1 and 10
  let guess = Number(prompt("Guess a number between 1 and 10:"));
  
  while (guess !== secret) {
    if (guess > secret) {
      alert("Too high! Try again.");
    } else if (guess < secret) {
      alert("Too low! Try again.");
    } else if (isNaN(guess)) {
      alert("Please enter a valid number!");
    }
    guess = Number(prompt("Guess again:"));
  }

  alert("🎉 Correct! The number was " + secret);
}
    console.log("Welcome to JS Exercises!");
    console.log("--------------------------");
    guessNumberGame();

// ========== EXERCISE 2 ==========
// Generate an array of random numbers
function generateRandomArray(length) {
  let numbers = [];
  for (let i = 0; i < length; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
  }
  return numbers;
}
// 2️⃣ Generate random array and print
    const myArray = generateRandomArray(10);
    console.log("Generated Array:", myArray);