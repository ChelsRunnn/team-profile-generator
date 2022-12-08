// packages required: 
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Wrangler = require('./lib/wrangler');
const ranchHand = require('./lib/ranchHand');
let outfit = [];

// Generate template functions
function generateHtml() {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
      <link href="https://fonts.googleapis.com/css2?family=Diplomata+SC&family=La+Belle+Aurore&family=Playfair+Display+SC&family=Playfair+Display:ital@0;1&family=Rye&display=swap" rel="stylesheet">
      <link rel="style-reset" href="./dist/reset.css"/>
      <link rel="stylesheet" href="./style.css"/>
      <title>The Ranch</title>
  </head>
  
  <body>
    <nav class="navbar navbar-light bg-light cstm-nav">
        <h1 class="mb-0 h1">the Ranch</h1>
        <h2>Meet the Outfit</h2>
    </nav>
  
    <main class="main">
      <section class="container-fluid cstm-container">
      ${generateCard()}
      </section>
    </main>

  <script src="https://kit.fontawesome.com/62cdfec72e.js" crossorigin="anonymous"></script>
  </body>
  </html>  
  `
}
function generateCard() {  
  const outfitArr = outfit.map((cowpoke) => {
    if (cowpoke.role === 'Ranch Manager') {
      return `
      <div class="card cstm-card" style="width: 25rem;">
        <div class="card-header cstm-header">
          <h3>${cowpoke.fullName}</h3>
          <h4><i class="fa-solid fa-star"></i>  Ranch Manager</h4> 
        </div>
        <ul class="list-group-flush cstm-body">
          <li class="list-group-item">Horse Name: ${cowpoke.horseName}</li>
          <li class="list-group-item">Stall: ${cowpoke.stall}</li>
          <li class="list-group-item">Email: <a href="${cowpoke.email}"> ${cowpoke.email}</a></li>
        </ul>
      </div>
      `
    } else if (cowpoke.role === 'Wrangler') {
      return `
      <div class="card cstm-card" style="width: 25rem;">
         <div class="card-header cstm-header">
          <h3>${cowpoke.name}</h3>
          <h4><i class="fa-solid fa-hat-cowboy"></i>   ${cowpoke.role}</h4> 
         </div>
         <ul class="list-group-flush cstm-body">
          <li class="list-group-item">Horse Name: ${cowpoke.horseName}</li>
          <li class="list-group-item">Stall: ${cowpoke.stall}</li>
          <li class="list-group-item">Email: <a href="${cowpoke.email}"> ${cowpoke.email}</a></li>
          <li class="list-group-item">Outlaw Alias: <a href="https://github.com/${cowpoke.gitHub}" target="_blank"> ${cowpoke.gitHub}</a></li>

         </ul>
       </div>
      `
    } else {
      return `
      <div class="card cstm-card" style="width: 25rem;">
        <div class="card-header cstm-header">
          <h3>${cowpoke.name}</h3>
          <h4><i class="fa-solid fa-hammer"></i>  ${cowpoke.role}</h4> 
        </div>
        <ul class="list-group-flush cstm-body">
          <li class="list-group-item">Horse Name: ${cowpoke.horseName}</li>
          <li class="list-group-item">Stall: ${cowpoke.stall}</li>
          <li class="list-group-item">Email: <a href="${cowpoke.email}"> ${cowpoke.email}</a></li>
          <li class="list-group-item">Outlaw Alias: <a href="https://github.com/${cowpoke.gitHub}" target="_blank"> ${cowpoke.gitHub}</a></li>
        </ul>
      </div>
      `
    }
  })
  // console.log(outfitArr);
  return outfitArr;
}
function generateCss() {
  return `
  :root{
    /* background & surface */
    --col-bg: #4f3d3d;
    --col-on-surface1: #4a2e31;
    --col-on-surface2: #733c30;
    /* primary */
    --col-p-tan: #a69180; 
    --col-p-orange: #ad7450;
    --col-p-blue: #a8bbbf;
    }
.cstm-nav {
background-color: var(--col-p-blue);
margin-bottom: 0;
height: 120px;
text-align: center;
border-top: 17px solid transparent !important;
}
h1 {
font-size: 80px !important;
padding-bottom: 5px ;
line-height: 0 !important;
margin-top: 10px;
font-family: 'Diplomata SC', 'Rye', 'Playfair Display SC' !important;
}
h2 {
font-family: 'La Belle Aurore', 'Playfair Display ital', 'san serif';
color: var(--col-p-orange);
font-size: 75px;
}
html, body {
height: 100%;
}
.main {
background-color: var(--col-bg);
height: 100%;
border-top: var(--col-p-orange);
border-top-width: 10px;
}
.cstm-container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    align-items: flex-end;
    flex-wrap: wrap;
}
.cstm-card {
background-color: var(--col-on-surface1);
margin-top: 40px;
padding: 8px;
border-radius: 8px
}
.cstm-header {
background-color: var(--col-p-tan);
border-top-left-radius: 8px;
border-top-right-radius: 8px;
/* margin-bottom: 0; */
padding: 6px;
border-bottom-width: 3px;
border-bottom-color: var(--col-on-surface1);
}

.cstm-body {
background-color: var(--col-on-surface2);
border-bottom-left-radius: 8px;
border-bottom-left-radius: 8px;
padding-left: 0;
/* border-top-width: 3px;
border-top-color: var(--col-on-surface1); */
}
  `
}
function generateReset() {
  return `
  /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
  `
}

// .prompt for additional outfit members
const addMember = () => {
  inquirer.prompt([
    {
      name: 'fullName',
      type: 'input',
      message: 'Employee full name'
    },
    {
      name: 'role',
      type: 'list',
      message: 'role',
      choices: ['Wrangler', 'Ranch Hand']
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
    },
    {
      name: 'add',
      type: 'confirm',
      message: 'Add another member to this outfit?'
    }
  ])
    .then((cowboyAnswers) => {
      // console.log(cowboyAnswers);
      if (cowboyAnswers.role === 'Wrangler') {
        const worker = new Wrangler(cowboyAnswers.fullName, cowboyAnswers.role, cowboyAnswers.email, cowboyAnswers.horseName, cowboyAnswers.stall, cowboyAnswers.gitHub)
        outfit.push(worker);
      } else if (cowboyAnswers.role === 'Ranch Hand') {
        const hand = new ranchHand(cowboyAnswers.fullName, cowboyAnswers.role, cowboyAnswers.email, cowboyAnswers.horseName, cowboyAnswers.stall, cowboyAnswers.gitHub)
        outfit.push(hand);
      }
      if (cowboyAnswers.add == true) {
        addMember()
      } else {
        const htmlTemplate = generateHtml();
          fs.writeFile('index.html', (htmlTemplate), (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
              );
      
          const cssTemplate = generateCss();
          fs.writeFile('style.css', (cssTemplate), (err) =>
              err ? console.log(err) : console.log('Successfully created style.css!')
            ); 

          const resetTemplate = generateReset();
          fs.writeFile('reset.css', (resetTemplate), (err) =>
              err ? console.log(err) : console.log('Successfully created reset.css!')
            ); 
      }
    })
}

// .prompt for Manager 
function main() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Employee full name',
      name: 'fullName',
    },
    // {
    //   name: 'aka',
    //   type: 'input',
    //   message:'Also known as'
    // },
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
      name: 'add',
      type: 'confirm',
      message: 'Add another member to this outfit?'
    }
  ])

    // save first input to managerAnswers & push to outfit array
    .then((managerAnswers) => {
      const manager = new Manager(managerAnswers.fullName, 'Ranch Manager', managerAnswers.email, managerAnswers.horseName, managerAnswers.stall)
      // console.log(manager);
      outfit.push(manager);
      // console.log(outfit);
      if (managerAnswers.add === true) {
        addMember()
      } else {
        // write 3 files (html, css, and reset.css)
        const htmlTemplate = generateHtml();
          fs.writeFile('index.html', (htmlTemplate), (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
              );
      
          const cssTemplate = generateCss();
          fs.writeFile('style.css', (cssTemplate), (err) =>
              err ? console.log(err) : console.log('Successfully created style.css!')
            ); 

          const resetTemplate = generateReset();
          fs.writeFile('reset.css', (resetTemplate), (err) =>
              err ? console.log(err) : console.log('Successfully created reset.css!')
            ); 
      }
    })
}

main();