//Global Consts
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");
//Empty to push data from employee into
empArray = [];

//Init to start app followed by prompted Q and A
const init = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter your company or team name",
        name: "name",
      },
      //Saves user name selection to DB Names
    ])
    .then((answers) => {
      const name = answers.name;
      empArray.push(name);

      newManager();
    });
};
//Manager prompts when entering new manager in
//Manager Call back funtion
const newManager = () => {
  //promt user questions
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your team manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your team manager's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your team manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your team manager's office number?",
        name: "officeNumber",
      },
      //Consts scoped to user answers to be placed properly(WIll do this for most sets of prompts)
    ])
    .then((answers) => {
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
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add any more employees?",
        choices: ["Engineer", "Intern", "No"],
        name: "newEmpData",
      },
      //Post user data gathering logic to switch cases for said models below. Used appropriate Breaks as well. Also gives access to other cases to then be able to be called after each member is added for each case type
    ])
    .then((answers) => {
      switch (answers.newEmpData) {
        case "Engineer":
          newEngineer();
          break;
        case "Intern":
          newIntern();
          break;
        case "No":
          generateIt();
          break;
      }
    });
};

//Created same scenario for Engineer
const newEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Engineers name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Engineers Employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Engineers email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Engineers Github Username?",
        name: "github",
      },
    ])
    .then((answers) => {
      const name = answers.name;
      const id = answers.id;
      const email = answers.email;
      const github = answers.github;
      const newEmployee = new Engineer(name, id, email, github);
      empArray.push(newEmployee);
      //new employee call back funtion to push data to array
      newEmp();
    });
};
const newIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Interns name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Interns Employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Interns email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Interns School?",
        name: "school",
      },
    ])
    .then((answers) => {
      const name = answers.name;
      const id = answers.id;
      const email = answers.email;
      const school = answers.school;
      const newEmployee = new Intern(name, id, email, school);
      empArray.push(newEmployee);
      //new employee call back funtion to push data to array
      newEmp();
    });
};

const generateIt = () => {
  const genArray = [];
  const indexOne = 
    `<!DOCTYPE html>
     <html lang="en">
     <head>
        
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
         <link rel="stylesheet" href=""/style/style.css"">
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         <title>${empArray[0]}</title>
     </head>
     <body>
         <div class="card-container">`
    
         genArray.push(indexOne);
    for (i = 1; i < empArray.length; i++){
        let pushed = `<div class="card" style="width: 18rem;">
                 <div class="card-body">
                    <h1 class="teamName">${empArray[0]}</h1>
                     <h2 class="card-title">${empArray[i].name}</h2>
                     <h3 class="card-subtitle mb-2 text-muted">Role: ${empArray[i].role}</h2>
                 </div>
                 <div class="card-bottom">
                     <p class="card-text"> ID: ${empArray[i].id} </p>
                     <p class="card-text"> Email: <a class="card-link" href="mailto: ${empArray[i].email}"> ${empArray[i].email}</a></p>
            
    `
    if (empArray[i].officeNumber) {
        pushed += `
        <p> Contact: ${empArray[i].officeNumber}</p>
        `
    }
    if (empArray[i].github) {
        pushed += `
        <p>GitHub: <a href="https://github.com/${empArray[i].github}">${empArray[i].github}</a></p>
        `
    }
    if (empArray[i].school) {
        pushed += `
        <p>School: ${empArray[i].school}</p>
        `
    }
    pushed += `
    </div>
    </div>
    `
    genArray.push(pushed)
}

const prodFin = `
</div>
</body>
</html>
`
genArray.push(prodFin);

fs.writeFile('output\index.html', genArray.join(""), function (err) {
    if (err) throw err
    else {
        console.log("Team Generated");
        console.log('Success');
    }
})
}
init();
