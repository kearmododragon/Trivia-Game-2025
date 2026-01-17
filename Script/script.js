/* Game logic
- start screen
- start game clicked
- generate question screen
- render question and answers
- Wait for user input (button) 
- check if answer is correct
- Update game state (score, highlight correct answer, any extra info)
- repeat until 10 questions complete
- show end game screen
*/
const questions = [
    {
        text: "What is there more of?",
        answers: [
            {   text: "ants", isCorrect: true},
            {   text: "dogs", isCorrect: false},
            {   text: "sheep", isCorrect: false},
            {   text: "white rhinos", isCorrect: false},
        ]
    },
    {
        text: "What colours are most common in flags of the world?",
        answers: [
            {   text: "Red, White, Blue", isCorrect: true},
            {   text: "Yellow, Black", isCorrect: false},
            {   text: "Green, Red, Black", isCorrect: false},
            {   text: "Pink, Purple, Mauve", isCorrect: false},
        ]
    }
];
/* Rules
- 10 questions per round
- 4 answers
- one correct
- +1 score per right answer
- game over after question 10
- end screen shows after

*/

/* questions

List of question objects, with text question, array of answers, known correct answer
User clicks answer, anwer checked if correct, return correct or not

*/

// Functions // 

// Event Listeners //