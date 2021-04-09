

 
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license) {
    return ("![" + license + "](https://img.shields.io/badge/License-" + license + "-green)");
  } else {
    return "";
  }



};

/*
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

*/





module.exports = readmeData => {
  
  const {title, description, installation, usage, contribution, tests, license} = readmeData;

  return `
  # ${title}

  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contribution
  ${contribution}

  ## Tests
  ${tests}

  ## License

  ## Questions
  `;

};