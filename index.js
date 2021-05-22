// from starter file 




// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generatemarkdown')




// TODO: Create a function to write README file


function writeToFile(data) {
   fs.writeFile('output/README.md',generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

}


// const promptUser = () => {
// console.log()
// }




// TODO: Create an array of questions for user input
// const questions = []

xxxxxxx

const readmeGen = () => {
//     console.log(`
// =================
// Add a New Project
// =================
// `);

// if (!portfolioData.projects) {
//     portfolioData.projects = [];
//   }
    
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is your Project Title? (Required)',
                validate: nameInput_1 => {
                    if (nameInput_1) {
                        return true;
                    } else {
                        console.log('You need to enter a project name!');
                        return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'description',
                message: 'Describe your project',
                validate: descriptionInput_1 => {
                    if (descriptionInput_1) {
                        return true;
                    } else {
                        console.log('You need to enter a project description!');
                        return false;
                    }
                }
            },
            
            {
                type: 'input',
                name: 'installation',
                message: 'installation instructions',
                validate: installationInput_1 => {
                    if (installationInput_1) {
                        return true;
                    } else {
                        console.log('You need to enter a Installation instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: 'usage information',
                validate: usageInput_1 => {
                    if (usageInput_1) {
                        return true;
                    } else {
                        console.log('You need to enter a Installation instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'contribution guidelines',
                validate: contributionInput_1 => {
                    if (contributionInput_1) {
                        return true;
                    } else {
                        console.log('You need to enter a Installation instructions!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: 'test instructions',
                validate: testInput_1 => {
                    if (testInput_1) {
                        return true;
                    } else {
                        console.log('You need to enter a Installation instructions!');
                        return false;
                    }
                }
                
            },
            {
                type: 'input',
                name: 'github',
                message: 'enter your github user name',
                validate: githubInput_1 => {
                    if (githubInput_1) {
                        return true;
                    } else {
                        console.log('You need to enter a github user name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: 'enter email address',
                validate: emailAddressInput_1 => {
                    if (emailAddressInput_1) {
                        return true;
                    } else {
                        console.log('You need to enter an email address!');
                        return false;
                    }
                }
            },
            
        ])
        
        
        
        
        
    };

    readmeGen().then(answers => console.log(answers));

    