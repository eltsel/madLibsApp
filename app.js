'use strict';

// Define Variables
let questionsTotal;
let questionArray=["Enter a noun","Enter a noun","Enter a noun","Enter a number","Enter a name","Enter an adjective","Enter a noun","Enter a noun"];
let numberOfQuestions=7;
let userInputs = [];
let questionCounter=0;

// Paragraph
console.log(`Hera is the goddess of ${userInputs[0]}, ${userInputs[1]}, ${userInputs[2]} and ${userInputs[3]} in ancient Greek religion and mythology, one of the ${userInputs[4]} Olympians and the sister and wife of ${userInputs[5]}. 

She is the daughter of the Titans Cronus and Rhea. Hera rules over Mount Olympus as queen of the gods. A matronly figure, Hera served as both the patroness and protectress of ${userInputs[6]} women, presiding over ${userInputs[7]} and blessing marital unions.`);

for(let i = numberOfQuestions; i >= 0; i--){
    userInputs.push(`<h2>${prompt(questionArray[questionCounter] + `(${i+1} questions left)`)}</h2>`);
    console.log(userInputs);
    questionCounter++;
}

// Edit Paragraph
let originalStory = `Hera is the goddess of ${userInputs[0]}, ${userInputs[1]}, ${userInputs[2]} and ${userInputs[3]} in ancient Greek religion and mythology, one of the ${userInputs[4]} Olympians and the sister and wife of ${userInputs[5]}. 

She is the daughter of the Titans Cronus and Rhea. Hera rules over Mount Olympus as queen of the gods. A matronly figure, Hera served as both the patroness and protectress of ${userInputs[6]} women, presiding over ${userInputs[7]} and blessing marital unions.`

console.log(originalStory);
document.write(originalStory);
alert('All done! Ready for your totally-accurate, not-at-all confusing history??');

/*`Hera is the goddess of women, marriage, family and childbirth in ancient Greek religion and mythology, one of the twelve Olympians and the sister and wife of Zeus. She is the daughter of the Titans Cronus and Rhea. Hera rules over Mount Olympus as queen of the gods. A matronly figure, Hera served as both the patroness and protectress of married women, presiding over weddings and blessing marital unions.` */