// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None'){
    return '';
  }
  return `![Badge](https://img.shields.io/badge/license-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){
    return '';
  } 
  return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  } 
  return `## License 
  
  This project has a ${license} license.
  `
}

// create table of contents logic here

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
 
 ## Description

 ${data.description}

 ## Table of Contents

 ${renderLicenseLink(data.license)}

 ## Installation
 ${data.installation}

 ## Usage
 ${data.usage} 

 ${renderLicenseSection(data.license)}

 ## Contributing
 ${data.contribute}

 ## Tests
 ${data.tests}

 ## Questions
 If you have any questions or want to contact me, you can reach me here:
 ${data.questions}
`;
}

module.exports = generateMarkdown;
