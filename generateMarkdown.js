// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache-2.0':' [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL-3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD3' :'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  };
  // If there is no license, return an empty string
  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  const licenseLinks = {
    'MIT': '[License: MIT](https://opensource.org/licenses/MIT)',
    'Apache-2.0':' [License :Apache-2.0](https://opensource.org/licenses/Apache-2.0)',
    'GPL-3.0': '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD3' :'[License:BSD3](https://opensource.org/licenses/BSD-3-Clause)',
  };
  // If there is no license, return an empty string
  return licenseLinks[license] || '';
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return '';
  }

  return `## License

This project is licensed under the [${license} License](${renderLicenseLink(license)}).`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);


  return `# ${data.title}

  ${licenseBadge}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${licenseBadge}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions, feel free to reach out:
  
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: [${data.email}](mailto:${data.email})
  `;





}

module.exports = generateMarkdown;
