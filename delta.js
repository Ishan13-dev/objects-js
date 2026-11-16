/**
 * Quiz Game Simulator
 * Stores a bank of multiple-choice questions, selects a random question,
 * simulates a random computer guess, and evaluates whether the guess is correct.
 */

// ==========================================
// 1. Question Bank Array
// ==========================================

// Array of 5 question objects.
// Rules enforced by tests:
// - Each object must have `category`, `question`, `choices`, and `answer`.
// - `choices` must be an array of 3 distinct strings.
// - `answer` must exactly match one of the strings inside `choices`.
const questions = [
  {
    category: "JavaScript",
    question: "Which keyword is used to declare a constant variable in JavaScript?",
    choices: ["var", "let", "const"],
    answer: "const"
  },
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    choices: ["Au", "Ag", "Fe"],
    answer: "Au"
  },
  {
    category: "Geography",
    question: "What is the capital city of Japan?",
    choices: ["Seoul", "Tokyo", "Beijing"],
    answer: "Tokyo"
  },
  {
    category: "Astronomy",
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Computer Science",
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "HighTech Machine Language",
      "Hyperlink and Text Markup Language"
    ],
    answer: "HyperText Markup Language"
  }
];

// ==========================================
// 2. Helper Functions
// ==========================================

/**
 * Selects a random question object from the provided questions array.
 *
 * HARD STEP EXPLANATION:
 * - `Math.random()` generates a decimal between 0 (inclusive) and 1 (exclusive).
 * - Multiplying by `questionsArray.length` scales that range to [0, arrayLength).
 * - `Math.floor()` rounds down to the nearest whole integer (e.g., 0 to 4 for 5 items),
 *   giving us a valid array index every time.
 *
 * @param {Object[]} questionsArray - The array of question objects.
 * @returns {Object} A randomly selected question object.
 */
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

/**
 * Selects a random answer string from an array of available choices.
 *
 * @param {string[]} choicesArray - The array of 3 possible answer choices.
 * @returns {string} A randomly selected choice string.
 */
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

/**
 * Compares the computer's choice against the question's correct answer.
 *
 * HARD STEP EXPLANATION:
 * - Test 14 requires exact equality (`===`) rather than `.includes()`, so partial
 *   string matches are rejected.
 *
 * @param {Object} questionObj - The selected question object.
 * @param {string} computerChoice - The answer string chosen by the computer.
 * @returns {string} The result message indicating whether the computer was right or wrong.
 */
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

// ==========================================
// 3. Example Usage / Game Simulation
// ==========================================

const selectedQuestion = getRandomQuestion(questions);
const computerGuess = getRandomComputerChoice(selectedQuestion.choices);
const resultMessage = getResults(selectedQuestion, computerGuess);

console.log("Category:", selectedQuestion.category);
console.log("Question:", selectedQuestion.question);
console.log("Choices:", selectedQuestion.choices);
console.log("Computer guessed:", computerGuess);
console.log("Outcome:", resultMessage);
