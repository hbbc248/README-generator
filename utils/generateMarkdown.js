
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license) {
    return ("![" + license + "](https://img.shields.io/badge/License-" + license + "-green)");
  } else {
    return "";
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  if (license) {
    if (license === "BSM") {return "[BSM](https://choosealicense.com/licenses/bsd-2-clause/)";}
    if (license === "MIT") {return "[MIT](https://choosealicense.com/licenses/mit/)";}
    if (license === "GPL") {return "[GPL](https://choosealicense.com/licenses/gpl-2.0/)";}
  } else {
    return "";
  }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license) {
    return ("This project was done under the " + license + " license to know more about it, please click here: ");
  } else {
    return "";
  }
};

// description Section
const renderDescriptionSection = description => {
  if (description) {
    return description;
  } else {
    return "";
  }
};

// installation Section
const renderInstallationSection = installation => {
  if (installation) {
    return installation;
  } else {
    return "";
  }
};
// usage Section
const renderUsageSection = usage => {
  if (usage) {
    return usage;
  } else {
    return "";
  }
};
// contribution Section
const renderContributionSection = contribution => {
  if (contribution) {
    return contribution;
  } else {
    return "";
  }
};
// tests Section
const renderTestsSection = tests => {
  if (tests) {
    return tests;
  } else {
    return "";
  }
};





module.exports = readmeData => {
  
  const {title, description, installation, usage, contribution, tests, license} = readmeData;

  return `
  # ${title}

  ${renderLicenseBadge(license)}

  ## Description
  ${renderDescriptionSection(description)}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${renderInstallationSection(installation)}

  ## Usage
  ${renderUsageSection(usage)}

  ## Contribution
  ${renderContributionSection(contribution)}

  ## Tests
  ${renderTestsSection(tests)}

  ## License
  ${renderLicenseSection(license)}${renderLicenseLink(license)}

  ## Questions
  `;

};