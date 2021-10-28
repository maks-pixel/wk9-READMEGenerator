// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project?'
    },
    {
        type:'input',
        name: 'installation',
        message: 'What are the steps for installing the program?'
    },
    {
        type:'input',
        name: 'usage',
        message:'Any instructions on how to use it? If so what?'
    },
    {
        type:'input',
        name: 'credits',
        message:'?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses did you use if any?',
        choices: ['MIT', 'APACHE', 'GPL', 'BSD', 'None']
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
