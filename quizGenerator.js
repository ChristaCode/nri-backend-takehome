const fs = require('fs')

var usageArray = null;
var questions = [];

// fs.readFile('usage.csv', 'utf8', function (err, data) {
//   usageArray = data.split("\n");  
// })

fs.readFile('questions.csv', 'utf8', function (err, data) {
  let questionsData = data.split("\n"); 
  questionsData.pop();
  questionsData.shift();

  let subArr = [];

  for(let i = 0; i < questionsData.length; i++){
	subArr = questionsData[i].split(",");
	questions[i] = subArr;
	subArr = null;
  }

  makeQuiz(5);
})



function makeQuiz(n){ // where n is size of quiz
	if(n < 0)
		return;

	console.log(questions[0][0]);

}
