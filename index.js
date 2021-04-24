//Global Consts
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
//Empty to push data from employee into 
empArray = [];

//Init to start app followed by prompted Q and A
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
//Manager prompts when entering new manager in
//Manager Call back funtion
const newManager = () => {
    //promt user questions
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
        //Consts scoped to user answers to be placed properly(WIll do this for most sets of prompts)
    ]).then((answers) => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const officeNumber = answers.officeNumber;
        const newEmployee = new Manager(name, id, email, officeNumber);
        empArray.push(newEmployee);
        
	    newEmp();
    });
};

const newEmp = () => { 
//New employee call back funtion
    inquirer.prompt([ 

        {  
            type: 'list', 
            message: 'Would you like to add any more employees?', 
            choices: [ 
                'Engineer', 
                'Intern', 
                'No',
            ], 
            name: 'newEmpData' 
        }, 
    ]) .then((answers) => {
        switch (answers.newEmpData) { 
            case 'Engineer': 
                newEngineer(); 
                break; 
            case 'Intern': 
                newIntern(); 
                break; 
            case 'No': 
                generateTeam();
                break; 
        }; 
    });
};


const newEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineers name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the Engineers Employee ID?',
            name: 'id',
        },{
            type: 'input',
            message: 'What is the Engineers email address?',
            name: 'email',
        },{
            type: 'input',
            message: 'What is the Engineers Github Username?',
            name: 'github',
        },
       
    ]) .then((answers) => {
        const name = answers.name;
        const id = answers.id;
        const email = answers.email;
        const officeNumber = answers.officeNumber;
        const newEmployee = new Manager(name, id, email, officeNumber);
        empArray.push(newEmployee);
        
	    newEmp();
});
};