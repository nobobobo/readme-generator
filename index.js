const inquirer = require("inquirer")

inquirer.prompt({
    type:"input",
    message: "What is your GitHub repository name?",
    name: "repoName"
}).then(function(response){
    console.log(response);
})