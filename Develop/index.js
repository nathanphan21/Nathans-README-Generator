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
    message: 'Enter usage instructions:'
    },

    {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines:'
    },

    {
    type: 'input',
    name: 'test',
    message: 'Enter test instructions:'
    },

    {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'other', 'other', 'other' ]
    },

    {
    type:'input',
    name: 'github',
    message: 'Enter your Github username:'
    },

    {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
    },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = `
        # ${answers.title}
        
        ## Description
        ${answers.description}
        
        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [License](#license)
        - [Questions](#questions)
        
        ## Installation
        ${answers.installation}
        
        ## Usage
        ${answers.usage}

        ## Contributing
        ${answers.contributing}
        
        ## Tests
        ${answers.tests}
        
        ## License
        [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})
        
        This application is covered under the ${answers.license} license.
        
        ## Questions
        GitHub: [${answers.github}](https://github.com/${answers.github})
        Email: ${answers.email}
            `;
        
            // Write the README content to a file
            writeToFile('README.md', readmeContent);
            console.log('README.md generated successfully.');
          });
        }
        
        // Function call to initialize app
        init();
        
