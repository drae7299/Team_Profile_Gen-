const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

employeeArray = [];

const init = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter your company or team name',
            name: 'name',
        },
    ]).then((answers) => {
        const name = answers.name;
        employeeArray.push(name);
        
        newManager();
    })
}

const newManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your team manager's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is your team manager's employee ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is your team manager's email address?",
            name: 'email',
        },

        {
            type: 'input',
            message: "What is your team manager's office number?",
            name: 'officeNumber',
        },
    ]).then((answers) => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const officeNumber = answers.officeNumber;
        const newEmployee = new Manager(name, id, email, officeNumber);
        employeeArray.push(newEmployee);
        
	    newMember();
    });
};

