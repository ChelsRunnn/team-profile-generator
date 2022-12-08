// packages required: 
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
// const ranchHand = require('./lib/ranchHand')

// function that has html template
//      includes ${create employee card} tag within
// const generateHTML = ({}) =>
// `<!DOCTYPE html>....`

// const renderEmployeeCard = ({fullName, role, email, stall, horseName, gitHub}) =>
// `<div class="card" style="width: 18rem;">
// <div class="card-header">
//     ${fullName}
// </div>
// <ul class="list-group list-group-flush">
//     <li class="list-group-item">Cras justo odio</li>
//     <li class="list-group-item">Dapibus ac facilisis in</li>
//     <li class="list-group-item">Vestibulum at eros</li>
// </ul>
// </div>`
// func to generateCowboyCard


// inquirer .prompt with card input questions
// questions for Manager first/mandatory (then other employees)
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Employee full name',
      name: 'fullName',
    },
    {
        name: 'role',
        type: 'choice',
        message: ['Ranch Manager']
      },
      {
        name: 'email',
        type: 'input',
        message: 'Employee email'
      },
      {
        name: 'horseName',
        type: 'input',
        message: 'Horse name'
      },
      {
        name: 'stall',
        type: 'input',
        message: 'Stall number'
      }
  ])
//  ?? Can i eventually do .prompt(managerAnswers, cowboyAnswers)
  
//   .prompt(cowboyQs)
//   .then(cowboyAnswers)

//   const managerQs = [
//     {
//       name: 'fullName',
//       type: 'input',
//       message: 'Employee full name'
//     },
//     {
//         name: 'role',
//         type: 'choice',
//         message: ['Ranch Manager']
//       },
//       {
//         name: 'email',
//         type: 'input',
//         message: 'Employee email'
//       },
//       {
//         name: 'horseName',
//         type: 'input',
//         message: 'Horse name'
//       },
//       {
//         name: 'stall',
//         type: 'input',
//         message: 'Stall number'
//       }
//   ]

  const cowboyQs = [
  {
    name: 'fullName',
    type: 'input',
    message: 'Employee full name'
  },
  {
      name: 'role',
      type: 'choice',
      message: ['Wrangler', 'Ranch Hand']
    },
    {
      name: 'email',
      type: 'input',
      message: 'Employee email'
    },
    {
      name: 'horseName',
      type: 'input',
      message: 'Horse name'
    },
    {
      name: 'stall',
      type: 'input',
      message: 'Stall number'
    },
{
    name: 'gitHub',
    type: 'input',
    message: 'Outlaw alias (github name)'
  }
  ]

// .then writeFile method template filled with answers 
.then((managerAnswers) => {
    const htmlTemplate = new Employee(managerAnswers);
    // htmlTemplate.generateHtml()
    // need to make new instance? to then call the generateHtml() on that instance?

    fs.writeFile('index.html', htmlTemplate.generateHtml(), (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
    // second fs.writeFile('style.css') to import my styles??
  });