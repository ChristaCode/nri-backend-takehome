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


  let strandHM = new Map();
  let standardsHM = new Map();

  let length = questions.length;
  let currLevel = 1;
  let strandIndex = 0;
  let standardsIndex = 0;
  let quizQuestions = [];

  let maxStrands = questions[length - 1][0];
  let maxStandards = questions[length - 1][2];
  quizQuestions[0] = questions[0][4];


  for(let i = 0; i < n; i++) {
  	strandIndex = chooseIndex(strandHM, maxStrands);
	strandHM.set(strandIndex, currLevel);

  	standardsIndex = chooseIndex(standardsHM, maxStandards);
	standardsHM.set(standardsIndex, currLevel);

	quizQuestions[i] = ['[strand: ' + strandIndex, 'standard: ' + standardsIndex + '] '];

	if(strandHM.size === maxStrands - 1)
  		strandHM.clear();

  	if(standardsHM.size === maxStandards - 1)
  		strandHM.clear();

	}
	
	console.log('result: ' + quizQuestions);

}

function chooseIndex(hm, maxStrands){
	let foundIndex = false;
	let strandIndex = 0;

	if(!hm){
		return Math.floor(Math.random()  * maxStrands + 1);
	}

	while(foundIndex != true){
		strandIndex = Math.floor(Math.random()  * maxStrands + 1);
  		if(hm.has(strandIndex))
  			foundIndex = false;
  		else {
  			foundIndex = true;
  		}
	}
	return strandIndex;
}
