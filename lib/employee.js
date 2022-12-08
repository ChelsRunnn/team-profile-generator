// ?? this class will hold the basic HTML template literal 
const Manager = require('./manager');

class Employee {
    constructor(fullName, role, email, stall) {
        this.name = fullName; 
        this.role = role;
        this.email = email;
        this.horseName = horseName;
        this.stall = stall;
        // ^^ if these aren't used here, do I need to include them?
    }
    generateHtml (managerAnswers) {
        const cardTemplate = Manager(managerAnswers);
        
        return `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Diplomata+SC&family=La+Belle+Aurore&family=Playfair+Display+SC&family=Playfair+Display:ital@0;1&family=Rye&display=swap" rel="stylesheet">
            <link rel="style-reset" href="./dist/reset.css"/>
            <link rel="stylesheet" href="./dist/style.css"/>
            <title>The Ranch</title>
        </head>
        
        <body>
          <nav class="navbar navbar-light bg-light cstm-nav">
              <h1 class="mb-0 h1">the Ranch</h1>
              <h2>Meet the Outfit</h2>
          </nav>
        
          <main class="main">
            <section class="container-fluid cstm-container">
              ${generateCard(managerAnswers)}
            </section>
          </main>

        <script src="https://kit.fontawesome.com/62cdfec72e.js" crossorigin="anonymous"></script>
        </body>
        </html>  
        `
    }
    
}
// how do I take user inputs from .prompt and use them in my constructor
// font awesome says to but the <script> tag in the head, but shouldn't i put it down here?
module.exports = Employee;