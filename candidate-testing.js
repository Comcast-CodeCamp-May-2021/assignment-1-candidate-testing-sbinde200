const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? ']; //in the array changed the "." to a "?" for the true or false question 
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = []; //this is an empty array that will fill up 
let candidateAnswer = "";//this is an empty string 



let numberOfQuizQuestions = questions.length;
 

// const firstQuestion = correctAnswer; // from part one 

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Candidate Name: ") //this is the question
  return candidateName;  //returning the input from the question for further use stored in variable candidateName
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //  correctAnswer = input.question(question);
  //  return firstQuestion; //first attempt from part one (tested success)

 for (let i = 0; i < questions.length; i++) {
 candidateAnswers.push(input.question(questions[i]));
  // console.log(candidateAnswers);
 }
  //  console.log(questions[i]); // attempt to make a my questions from the array ask in sequential order. FAILED
  // console.log(candidateAnswers);
} 

// console.log(questions.length);

function gradeQuiz(candidateAnswers) {
  let grade = "";
  let numberOfCorrectAnswers = 0;
 // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 // if (correctAnswer === firstQuestion) {
 //   console.log("You are correct!")
 // } else { console.log ("You are incorrect") //from part one / IF ELSE STATEMENT
 //  }
  console.log(`Candidate Name: ${candidateName}`)
  for (let i = 0; i < correctAnswers.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    numberOfCorrectAnswers += 1;
   }

  console.log(`${i+1}) ${questions[i]}`);
  console.log(`Your Answer: ${candidateAnswers[i]}`) 
  console.log(`Correct Answer: ${correctAnswers[i]}\n`); 
  }


  
  for (let i = 0; i < candidateAnswers.length; i++) {
  if (candidateAnswers[i] === correctAnswers[i]) { 
    // console.log("correct");
 
  } else {
    // console.log("wrong")}
 }

 grade = (numberOfCorrectAnswers / numberOfQuizQuestions) * 100;
 

 }

  console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of ${numberOfQuizQuestions} responses correct <<<`)
 
 if (grade >= 80) {
   console.log(">>> Status: PASSED <<<");
 } else {
   console.log(">>> Status: FAILED <<<");


 }
  // console.log(grade);
  
  
  return grade;

  // console.log(`>>> Status: ${passedExam} <<< `)      //these are the two final pieces to the puzzle minus the equation that needs to be written to calculate the grade. These are two template literals 

}

function runProgram() {
  askForName(candidateName);
  // TODO 1.1c: Ask for candidate's name //
  // console.log(`Welcome ${candidateName} !`); //Made a template Literal welcoming the user - but this does not reflect the example output so i removed it

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