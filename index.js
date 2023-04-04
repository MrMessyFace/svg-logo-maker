const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = [
  "Enter text for the logo:",
  "Enter a text color:",
  "Select a shape for the logo:",
  "Enter a shape color:"
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Hmm... Didn't work.", err);
    } else {
      console.log("SVG Logo successfully generated!");
    };
  });
};

function init() {
  inquirer.prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'text',
      default: '(Must not be more than 3 characters)'
    },
    {
      type: 'input',
      message: questions[1],
      name: 'textColor'
    },
    {
      type: 'list',
      message: questions[2],
      name: 'shape',
      choices: [
        'circle',
        'square',
        'triangle'
      ]
    },
    {
      type: 'input',
      message: questions[3],
      name: 'shapeColor'
    },
  ])
  .then(answers => {
    // console.log(answers);
    let shape;

    if(answers.shape == "circle") {
      shape = new Circle(answers.text, answers.textColor, answers.shapeColor)
    };

    if(answers.shape == "square") {
      shape = new Square(answers.text, answers.textColor, answers.shapeColor)
    };

    if(answers.shape == "triangle") {
      shape = new Triangle(answers.text, answers.textColor, answers.shapeColor)
    };
    
    writeToFile("logo.svg", shape.render());
  });
};

init();
