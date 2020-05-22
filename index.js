const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub repository name?",
        name: "repoName"
    },{
        
    }
    ]).then(response => {
    console.log(response);
})


const createNewReadme = () => {
    fs.write("README.md", "");
}

const addNewLine = (text, prefix) => {
    newLine = `${prefix} ${text}`;
    fs.appendFile("README.md", `${newLine}\n`);
}

