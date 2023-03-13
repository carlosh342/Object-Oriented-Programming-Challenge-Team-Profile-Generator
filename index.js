const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
const generateHTML = require("./src/template.js");

teamMembers = [];

function main() {

   function getTeamMembers() {
    return this.teamMembers;
   }

   function createGroup() {
    inquirer.prompt([{
        type: "list",
        message: "What team member would you like to add to your team?",
        name: "addTeamMemberPrompt",
        choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
      }]).then(function (userInput) {
        switch(userInput.addTeamMemberPrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
  
          default:
            initializeHTML();
        }
      })
   }

   function addManager() {
    inquirer.prompt ([
    
        {
          type: "input",
          name: "name",
          message: "What is the name of the manager?"
        },
    
        {
          type: "input",
          name: "id",
          message: "The manager's employee ID number?"
        },
    
        {
          type: "input",
          name: "email",
          message: "The manager's email address?"
        },
    
        {
          type: "input",
          name: "officeNumber",
          message: "The manager's office number?"
        }
    
      ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        createGroup();
      });
   }

   function addEngineer() {
    inquirer.prompt ([
    
        {
          type: "input",
          name: "name",
          message: "What is the name of the employee?"
        },
    
        {
          type: "input",
          name: "id",
          message: "The employee's ID number?"
        },
    
        {
          type: "input",
          name: "email",
          message: "The employee's email address?"
        },
    
        {
          type: "input",
          name: "githubUsername",
          message: "The employee's github username?"
        }
    
      ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        createGroup();
      });
   }

   function initializeHTML() {
    console.log("Team has been created!");

     //function that writes the html file in the dist folder
    const pagehtml = generateHTML(getTeamMembers());
    fs.writeFile('./dist/index.html', pagehtml, err => {
        if (err) throw new Error(err);
        console.log('Page created! Check out index.html');
    });
   }

   function addIntern() {
    inquirer.prompt ([
    
        {
          type: "input",
          name: "name",
          message: "What is the name of the intern?"
        },
    
        {
          type: "input",
          name: "id",
          message: "The intern's ID number?"
        },
    
        {
          type: "input",
          name: "email",
          message: "The intern's email address?"
        },
    
        {
          type: "input",
          name: "school",
          message: "The intern's school?"
        }
    
      ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        createGroup();
      });
   }

   createGroup();
}

main();