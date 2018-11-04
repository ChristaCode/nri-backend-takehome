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

  console.log(questions);

  // generate random number within out strata
  // mark outer strata as counted 
  // generate random number within inner strata
  // mark inner strata as counted
  // add question to array
  // once all possible outer strata are accounted for, reset count of outer strata
  // once all possible inner strata are acconted for, reset count of inner strata

  // rand(2) => 1
  // add 1 to countOuter hashmap
  // add 1 to numCountOuter
  // if numCountOuter = numOfOuter increment desired count by one
  // rand(2) // if return value in countOuter run rand again

  let hm = new Map();
  let length = questions.length;
  let currLevel = 1;
  let strandIndex = 0;

  let maxStrands = questions[length - 1][0];
  // let maxStandards = questions[length - 1][2];


  for(let i = 0; i < 5; i++) {
  	  if(!hm){
	  	strandIndex = chooseIndex(hm, maxStrands);
		hm.set(strandIndex, currLevel);
  	  } else if(hm.size === maxStrands){
	  	currLevel++;
	  	hm = null;
	  } else {
	  	strandIndex = chooseIndex(hm, maxStrands);
		hm.set(strandIndex, currLevel);
	  }


      console.log(hm);
      console.log(hm.size);
      console.log(maxStrands);

	}


  //  [ '1', 'Nouns', '3', 'Proper Nouns', '6', '0.4' ],
  //  [ '2', 'Verbs', '4', 'Action Verbs', '7', '0.9' ],

}

function chooseIndex(hm, maxStrands){
	let foundIndex = false;
	let strandIndex = 0;

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
