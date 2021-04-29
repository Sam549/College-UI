const quizData = [
    {
        question: "1.The man along with the girl. (Sing)",
        correct: "sings",
    },
    {
        question: "2.Rheema the car through the jungle. (Drive)",
        correct: "drives",
    },
    {
        question: "3.Arun the exams well. (Write)",
        correct: "wrote",
    },
    {
        question: "4.Preetha and Aruna to run very fast seeing the dog. (Begin)",
        correct: "began",
    },
    {
        question: "5.The teddy bear lovely. (Looks)",
        correct: "looks",
    },
    {
        question: "6.The cookery show at 6pm. (Start)",
        correct: "will start",
    },
    {
        question: "7.The teacher me the tricks to ace maths. (Teach)",
        correct: "taught",
    },
    {
        question: "8.The blind girl the cat. (Feed)",
        correct: "fed",
    },
    {
        question: "9.The musician the piano extremely well. (Play)",
        correct: "is playing",
    },
    {
        question: "10.The lecturer a bit late to the class yesterday. (Come)",
        correct: "came",
    },
    {
        question: "11.Varun of keeping a birthday party. (Think)",
        correct: "will be thinking",
    },
    {
        question: "12.He has the book many times. (Read)",
        correct: "read",
    },
];

const quiz = document.getElementById("quiz");
const results = document.getElementById("results");
const submitBtn = document.getElementById("submit");
generateQuiz(quizData, quiz, results, submitBtn);

function generateQuiz(quizData, quiz, results, submitBtn){

    function showQuestions(quizData, quiz){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<quizData.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in quizData[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="text" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + quizData[i].answers[letter]
            + '</label>'
          );
        }
        output.push(
            '<div class="question">' + quizData[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
          );
        }
        quiz.innerHTML = output.join('');
  }
  function showResults(quizData, quiz, results){
    
    // gather answer containers from our quiz
    var answerContainers = quiz.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<quizData.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===quizData[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    results.innerHTML = numCorrect + ' out of ' + quizData.length;
  }

  // show questions right away
  showQuestions(quizData, quiz);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(quizData, quiz, results);
  }

}