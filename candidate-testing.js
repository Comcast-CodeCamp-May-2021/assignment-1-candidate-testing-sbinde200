const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride"
let candidateAnswer = "";
let questions = ['Who was the first American woman in space?', 'True or false: 5 kilometer == 5000 meters?', '(5 + 3)/2 * 10 = ?', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", 'What is the minimum crew size for the ISS?'];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

let numberOfCorrectAnswers;
let numberOfQuizQuestions;

// const firstQuestion = correctAnswer;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Candidate Name: ") //this is the question
return candidateName;  //returning the input from the question for further use 
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//  correctAnswer = input.question(question);
//  return firstQuestion; //first attempt from part one (tested success)

 for (let i = 0; i < questions.length; i++) {
candidateAnswer = input.question(questions[i]);
candidateAnswers.push(candidateAnswer);

 }
//  console.log(questions[i]); // attempt to make a my questions from the array ask in sequential order. FAILED
// console.log(candidateAnswers);
} 

function gradeQuiz(candidateAnswers) {
 // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// if (correctAnswer === firstQuestion) {
//   console.log("You are correct!")
// } else { console.log ("You are incorrect") //from part one / IF ELSE STATEMENT
//  }

for (let i = 0; i < candidateAnswers.length; i++) {

if (candidateAnswers[i].toLowerCase() === correctAnswer[i].toLowerCase()) {
  console.log(` Your Answer: ${candidateAnswers[i]}\n
  Correct Answer: ${correctAnswers[i]} `);
}
}

  let grade = numberOfCorrectAnswers / numberOfQuizQuestions * 100;
  

  return grade;
}

function runProgram() {
  askForName(candidateName);
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome ${candidateName} !`); //Made a template Literal

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};