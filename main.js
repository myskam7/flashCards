var inquirer = require("inquirer");
var flashCards = require("./BasicCard.js")
var cardF = require("./ClozeCard.js")

//#############################

var correct = 0;
var wrong = 0;
var currentQuestion = 0;

// clozeArray will store the answers
var clozeArray = [];

//List of questions
var questions = [
    {   
        full: 'The capital of Autralia is Canberra.' ,
        cloze: 'Canberra'
    },
    {
      
        full: 'Usain Bolt is the fastest sprinter in the world.',
        cloze: 'Usain Bolt'
    },
    {
       
        full: 'The 2010 valcano eruption in Iceland was named "Eyjafjallajökull" .',
        cloze: '"Eyjafjallajökull"'
    },
    {
         full: 'The first automobile was had three-wheels and was invented by Karl Benz.',
         cloze: 'Karl Benz'
     },
     {
        full: 'Hurricanes of Pacific Ocean are called cyclones and typhoons.',
        cloze: 'typhoons'
    }
]




// creates the questions and 
for (var i = 0; i < questions.length; i++) {
    var q = new cardF(questions[i].full, questions[i].cloze);

    clozeArray.push(q);
}



// Qs display's questions
function Qs() {
    inquirer.prompt([
        {
            type: 'input',
            message: clozeArray[currentQuestion].partial + 'Answer: ',
            name: 'userGuess'
        }

    ])
    .then( (answers) => {
        if (currentQuestion < clozeArray.length - 1) {
            currentQuestion++;

            Qs();

        }
         else {
            console.log('Game Over!');
            console.log('Correct Answers: ' + correct);
            console.log('Incorrect Answers: ' + wrong);


        // After user input, the conditional will compare the user input to the correct answer
        if (answers.userGuess.toLowerCase() === clozeArray[currentQuestion].cloze.toLowerCase()) {
            console.log('Correct!');
            correct++;

        } 
        else {
            console.log('Incorrect!');
            wrong++;

        }

        // Correct answer
        console.log(clozeArray[currentQuestion].full);
     
           //Game reset
            inquirer.prompt([
                {
                    type: 'confirm',
                    message: 'Would you like to play again?',
                    name: 'reset'
                }
            ])
            .then(function (answers) {
                if (answers.reset) {
                    correct = 0;
                    wrong = 0;   
                    currentQuestion = 0;
                    
                    Qs();
                //game finished
                } 
                else {
                    
                    console.log('Ok! Bye!');
                }
            })
        }
    })
}


Qs();
