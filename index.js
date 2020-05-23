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
            message: "What is your project title?",
            name: "title"
        }, {
            type: "input",
            message: "What is your project description?",
            name: "desc"
        }, {
            type: "input",
            message: "How to install your project?",
            name: "install"
        }, {
            type: "input",
            message: "How to use your project?",
            name: "usage"
        }

    ])
    .then(
        response => {
            // create a new README.md in current directory
            createNewReadme();

            // append title
            title = `# ${response.title}\n\n`;
            addText(title);

            // append table of contents

            addText("1. [ Description ](#desc)\n2. [ Installation ](#install)\n3. [ Usage ](#usage)\n4. [ License ](#license)\n5. [ Contributing ](#contribute)\n6. [ Tests ](#test)\n7. [ Questions ](#question)\n\n");

            // append description
            description = `<a name="desc"></a>\n ## 1. Description \n\n${response.desc}\n\n`;
            addText(description);


            // append installtion
            installation = `<a name="install"></a>\n ## 2. Installation \n\n\`\`\`${response.install}\`\`\`\n\n`;
            addText(installation);


            // append Usage
            usage = `<a name="usage"></a>\n ## 3. Usage \n\n\`\`\`${response.usage}\`\`\`\n\n`;
            addText(usage);


        })
