// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Explain how to use your project:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'ISC',  'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Explain how others can contribute to your project:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md successfully generated!');
      }
    });
  }
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      
      const templates = generateReadmeContent(answers);
  
      // Write README file
      writeToFile('README.md', templates);
    });
  }



  function generateReadmeContent(answers) {

    const templates = 
     `# ${answers.title}

    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
    *[Tests](#tests)
  
    # Description
    ${answers.description}

    # Installation
    ${answers.installation}

    # Usage
    ${answers.usage}

    # License
    ${answers.license}

    # Contributing
    ${answers.contributing}

    # Tests
    ${answers.tests}

    # Contact
    * User-Name :${answers.username}
    * E-mail :${answers.email}`;
    

    return templates;






  }
// Function call to initialize app
init();
