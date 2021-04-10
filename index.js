// packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require ('./utils/generateMarkdown.js');
const generateReadme = require ('./utils/generateReadme.js');
let readmeData = {};

// initial prompt to user for project title
const  promptTitle = () => {
    console.log(`
    ===========================
    Welcome to README generator
    ===========================
    `);
    return inquirer.prompt([
        {
          type: 'input',
          name: "title",
          message: "What is the name or title of your project? (Required):",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your project name or title!");
              return false;
            }
          }
        }     
    ]);
};

// prompt user for other information
const  promptOther = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: "description",
        message: "Enter the description of your project (Required):",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the description of your project!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: "installation",
        message: "Enter installation instructions (Required):",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the installation instructions!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: "usage",
        message: "Enter usage information (Required):",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the usage information!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: "contribution",
        message: "Enter the contribution guidelines (Required):",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the contribution guidelines!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: "tests",
        message: "Enter the test instructions (Required):",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the test instructions!");
            return false;
          }
        }
      }
  ]);
};

// prompt user for license 
const  promptLicense = () => {
  return inquirer.prompt([
      {
        type: 'list',
        name: "license",
        message: "Please select a license for your project (Required):",
        choices: ['BSM', 'MIT', 'GPL'],
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your project name or title!");
            return false;
          }
        }
      }     
  ]);
};


// prompt user for github username and email to contact
const  promptContact = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: "github",
        message: "Enter your GibHub username (Required):",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: "email",
        message: "Enter your email address (Required):",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        }
      }
     
  ]);
};


// promp user for title
promptTitle()
    .then(data => { 
      readmeData = {...readmeData, ...data};
      // call function to generate markdown
      return generateMarkdown(readmeData);
    })
    .then(fileContent => {
      // generate Readme with just title
      generateReadme(fileContent);
      // prompt user for other information
      return promptOther()
        .then(data => { 
          readmeData = {...readmeData, ...data};
          // generate new mark down
          return generateMarkdown(readmeData);
        })
        .then(fileContent => {
          // update readme file with new content
          generateReadme(fileContent);
          // prompt user for license
          return promptLicense()
            .then(data => { 
              readmeData = {...readmeData, ...data};
              // generate new mearkdown with license included
              return generateMarkdown(readmeData);
            })
            .then(fileContent => {
              // update readme file with new content
              generateReadme(fileContent);
              // prompt user for github and email for questions section
              return promptContact()
                .then(data => { 
                  readmeData = {...readmeData, ...data};
                  // generate new markdown
                  return generateMarkdown(readmeData);
                })
                .then(fileContent => {
                  // update readme file with new content
                  generateReadme(fileContent);
                  // final message
                  return console.log(`
                  ************************************
                            README completed!
                  ************************************
                  Thank you for using README generator
                  ************************************
                            Have a nice day!
                  ************************************
                  `);
                })
                .catch(err => {
                  console.log(err);
                });           
            })
            .catch(err => {
              console.log(err);
            });           
        })
        .catch(err => {
          console.log(err);
        });           
    })
    .catch(err => {
        console.log(err);
    });            








