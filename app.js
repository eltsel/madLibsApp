'use strict';

// Define Variables
let questionsTotal;
let questionArray=["Enter a noun","Enter a noun","Enter a noun","Enter a number","Enter a name","Enter an adjective","Enter a noun","Enter a noun"];
let numberOfQuestions=7;
let userInputs = ["woman","marriage","family","childbirth","twelve","Zeus","married women","weddings"];
let questionCounter=0;

for(let i = numberOfQuestions; i >= 0; i--){
    userInputs[questionCounter] = prompt(questionArray[questionCounter]+(`(${i+1} questions left)`));
    console.log(questionArray[questionCounter] + `(${i+1} questions left)`);
    questionCounter++;
}

// Paragraph
let originalStory = `Hera is the goddess of ${userInputs[0]}, ${userInputs[1]}, ${userInputs[2]} and ${userInputs[3]} in ancient Greek religion and mythology, one of the ${userInputs[4]} Olympians and the sister and wife of ${userInputs[5]}. 

She is the daughter of the Titans Cronus and Rhea. Hera rules over Mount Olympus as queen of the gods. A matronly figure, Hera served as both the patroness and protectress of ${userInputs[6]} women, presiding over ${userInputs[7]} and blessing marital unions.`

console.log(originalStory);

/*`Hera is the goddess of women, marriage, family and childbirth in ancient Greek religion and mythology, one of the twelve Olympians and the sister and wife of Zeus. She is the daughter of the Titans Cronus and Rhea. Hera rules over Mount Olympus as queen of the gods. A matronly figure, Hera served as both the patroness and protectress of married women, presiding over weddings and blessing marital unions. */