// Packages needed for this application
//New users must install inquirer via terminal command line: npm i inquirer@8.2.4
const inquirer = require('inquirer');
const fs = require('fs');
//Template for README file
const generateREADME = ({title, description, installation, usage, credits, license, github, email }) =>
`# ${title}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}

## Questions
Please contact me if you have any questions or suggestions for improvement!
[GitHub](${github})
${email}`;
//Prompts requiring user input to fill template above
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project: What? Why? How?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use:',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license are you using for your project?',
      choices: ['MIT License', 'The Unilicense', 'Boost Software License 1.0', 'Mozilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github profile link:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
  ])
  //function to write user input to README.md
  .then((answers)=> {
    const readmeContent = generateREADME(answers);
    fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!'));
  });


