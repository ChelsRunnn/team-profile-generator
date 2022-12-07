// packages required: 
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const 

// function that has html template
//      includes ${create employee card} tag within
const generateHTML = ({})
`<!DOCTYPE html>....`

// func to generateCowboyCard


// inquirer .prompt with card input questions
// questions for Manager first/mandatory (then other employees)
inquirer
  .prompt(managerQs)
  .then(managerAnswers)
  
  .prompt(cowboyQs)
  .then(cowboyAnswers)

  const managerQs = [
    {
      name: 'fullName',
      type: 'input',
      message: 'Employee full name'
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
  ]

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
    const htmlPageContent = generateHTML(managerAnswers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });