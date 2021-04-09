// TODO: Include packages needed for this application



const inquirer = require("inquirer");
const generateMarkdown = require ('./utils/generateMarkdown.js');
const generateReadme = require ('./utils/generateReadme.js');
let readmeData = {jose:1};


const  promptUser = () => {
    console.log(`
    ===========================
    Welcome to README generator
    ===========================
    `);
    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is your project name or title? (Required)',
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
















promptUser()
  .then(data => {
    console.log(data);  
    readmeData = {...readmeData, ...data};
    console.log(readmeData)
    return generateMarkdown(readmeData);
  })
  .then(fileContent => {
      return generateReadme(fileContent);
  })
  .catch(err => {
      console.log(err);
  });