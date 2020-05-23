const inquirer = require("inquirer");
const fs = require("fs");


const createNewReadme = () => {
    fs.writeFileSync("README.md", "", err => {
        if (err) return console.log(err);
    });
}

const addText = (text, prefix, suffix) => {
    newText = `${prefix} ${text} ${suffix}`;
    fs.appendFileSync("README.md", newText, err => {
        if (err) return console.log(err);
    });
}


inquirer
    .prompt([
        {
            type: "input",
            message: "What is your Project title?",
            name: "title"
        }, {
            type: "input",
            message: "What is your Project description?",
            name: "desc"
        }

    ])
    .then(
        response => {
            // create a new README.md in current directory
            createNewReadme();

            // append title
            addText(response.title, "# ", "\n\n");

            // append table of contents

            addText("1. [ Description ](#desc)", "", "\n");

            // append description
            addText('<a name="desc"></a>', "", "\n");
            addText('1. Description', "## ", "\n\n");
            addText(response.desc, "", "\n\n");
        })
