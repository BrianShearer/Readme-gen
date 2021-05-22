// TODO: Create a function that returns a license badge based on which license is passed in

const { AsyncSubject } = require("rxjs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}



---------

 ## Table of Contents 

 ------------

  ## Description 
  ### ${data.description}    

  -----------
  ## Installation 
  ### ${data.installation}

  --------------

  ## Usage
  ### ${data.usage}

  ------------

  ## Tests
  ### ${data.test}

  -----------------

  ## Contribution Guidelines
  ### ${data.contribution}

  ---------------
  ## Questions
  Please contact me at my github pages or email address with 
  any questions.
  ###${data.github}
  ### ${data.emailAddress}

  --------------

  ## License


  -----------------


`;
}

module.exports = generateMarkdown;


