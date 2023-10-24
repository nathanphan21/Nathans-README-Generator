// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:'
    },

    {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },

    {
    type: 'input',
    name: 'usage',
    message: 'Enter usage instructions'
    },

    {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines'
    },

    {
    type: 'input',
    name: 'test',
    message: 'Enter test instructions'
    },

    {
    type: 'input',
    name: 'license',
    message: 'Choose a license',
    choices: ['MIT', 'other', 'other', 'other' ]
    },

    {
    type:'input',
    name: 'Github username',
    message: 'Enter your Github username'
    },

    {
    type: 'input',
    name: 'email',
    message: 'Enter your email address '
    },

]

init();