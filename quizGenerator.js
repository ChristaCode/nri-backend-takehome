const fs = require('fs')

// parse csv data

fs.readFile('usage.csv', 'utf8', function (err, data) {
  var usageArray = data.split("\n");  //Be careful if you are in a \r\n world...
  // Your array contains ['ID', 'D11', ... ]
  console.log(usageArray);
})

fs.readFile('questions.csv', 'utf8', function (err, data) {
  var questionsArray = data.split("\n");  //Be careful if you are in a \r\n world...
  // Your array contains ['ID', 'D11', ... ]
  console.log(questionsArray);
})
