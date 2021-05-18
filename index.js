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






const readmeGen = () => {
    console.log(`
=================
Add a New Project
=================
`);

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
                name: 'installationInstructions',
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
                name: 'usageInformation',
                message: 'usage information',
            },
            {
                type: 'input',
                name: 'contributionGuidlines',
                message: 'contribution guidelines',
            },
            {
                type: 'input',
                name: 'testInstructions',
                message: 'test instructions'
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

    readmeGen().then(answers => console.log(answers))