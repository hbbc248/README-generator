// TODO: Include packages needed for this application



const inquirer = require("inquirer");
const generateMarkdown = require ('./utils/generateMarkdown.js');
const generateReadme = require ('./utils/generateReadme.js');
let readmeData = {};


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










/*

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/





promptTitle()
    .then(data => { 
      readmeData = {...readmeData, ...data};
      return generateMarkdown(readmeData);
    })
    .then(fileContent => {
      generateReadme(fileContent);
      return promptOther()
        .then(data => { 
          readmeData = {...readmeData, ...data};
          return generateMarkdown(readmeData);
        })
        .then(fileContent => {
          generateReadme(fileContent);
          return promptLicense()
            .then(data => { 
              readmeData = {...readmeData, ...data};
              return generateMarkdown(readmeData);
            })
            .then(fileContent => {
              return generateReadme(fileContent);
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








