const inquirer = require("inquirer");
const fs = require("fs");


const createNewReadme = () => {
    fs.writeFileSync("README.md", "", err => {
        if (err) return console.log(err);
    });
}

const addText = text => {
    fs.appendFileSync("README.md", text, err => {
        if (err) return console.log(err);
    });
}


inquirer
    .prompt([
        {
            type: "input",
            message: "Project title: ",
            name: "title"
        }, {
            type: "input",
            message: "Project version: ",
            name: "version"
        }, {
            type: "input",
            message: "Project description: ",
            name: "desc"
        }, {
            type: "input",
            message: "Install command: ",
            name: "install"
        }, {
            type: "input",
            message: "Usage command: ",
            name: "usage"
        }, {
            type: "list",
            message: "License name: ",
            choices: ['MIT License', 'GNU General Public License (GPL)', 'Creative Commons Licenses', 'Other'],
            name: "license"
        }, {
            type: "input",
            message: "Author name: ",
            name: "author"
        }
    ])
    .then(
        response => {
            // create a new README.md in current directory
            createNewReadme();

            // append title
            title = `# ${response.title}\n\n`;
            addText(title);

            // append a badge for version
            // [![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)

            versionBadgeText = `[![Generic badge](https://img.shields.io/badge/Version-${response.version}-GREEN.svg)](https://shields.io/)\n`;
            addText(versionBadgeText);

            // append a badge for license
            hasLicense = true;
            if (response.license === "MIT License"){
                licenseBadgeText = '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)\n'
            } else if (response.license === "GNU General Public License (GPL)"){
                licenseBadgeText = '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)\n'
            } else if (response.license === "Creative Commons Licenses"){
                licenseBadgeText = '[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)\n'
            } else {
                licenseBadgeText = '\n';
                hasLicense = false;
            }

            addText(licenseBadgeText);


            // append table of contents

            addText("1. [ Description ](#desc)\n2. [ Installation ](#install)\n3. [ Usage ](#usage)\n4. [ License ](#license)\n5. [ Contributing ](#contribute)\n6. [ Tests ](#test)\n7. [ Questions ](#question)\n\n");

            // append description
            descText= `<a name="desc"></a>\n ## 1. Description \n\n${response.desc}\n\n`;
            addText(descText);


            // append installtion
            installationText = `<a name="install"></a>\n ## 2. Installation \n\n\`\`\`\n${response.install}\n\`\`\`\n\n`;
            addText(installationText);


            // append Usage
            usageText = `<a name="usage"></a>\n ## 3. Usage \n\n\`\`\`\n${response.usage}\n\`\`\`\n\n`;
            addText(usageText);

            // append License section
            year = new Date().getFullYear();
            licenseText = `<a name="license"></a>\n ## 4. License \n\n© ${year} ${response.author} All Rights Reserved.\n\n`;

            if (hasLicense){
                licenseText += `This project is ${response.license} licensed. \n\n`
            }

            addText(licenseText)

        })


