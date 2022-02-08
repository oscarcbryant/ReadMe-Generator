// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project?'
    },
    {   
        type: 'input',
        name: 'description',
        message: "Tell us about your project",
    },
    {
        type: 'input',
        name: 'installation',
        message: "How do I install your application?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "How do I use this application?",
    },
    {
        type: 'list',
        name: 'license',
        message: "Which license would you like to select?",
        choices: ["MIT", "Apache"]
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Who can contribute to this code?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "How can we test this code?",
    },
    {
        type: 'input',
        name: 'username',
        message: "Tell us your GitHub username",
    },
    {
    type: 'input',
    name: 'email',
    message: "Tell us your email address",
},

    ])
}



const generateLicense = (license) => {
    if (license === 'MIT') {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license === 'Apache') {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
}

const generateReadMe = (answers) => {

return `# ${answers.name} ${generateLicense(answers.license)}

## Description: 
${answers.description}

## Table of Contents: 
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributors](#Contributors)
* [Test](#Tests)
* [Questions](#Questions)

## Installation
${answers.installation}

## Usage 
${answers.usage}

## License
${generateLicense(answers.license)}

## Contributors 
${answers.contribution}

## Tests 
${answers.tests}

## Questions

For more information, please find my contact details below:

Github username: 

${answers.username}

Github account: 

https://github.com/${answers.username}

Email:

${answers.email}`

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => {
        console.log(answers)
        fs.writeFileSync('README.md', generateReadMe(answers))
    })
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err))

}
// Function call to initialize app
init();
