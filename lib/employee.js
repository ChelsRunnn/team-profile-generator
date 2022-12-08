// ?? this class will hold the basic HTML template literal 
// const Manager = require('./manager');
// Parent class
class Employee {
    constructor(fullName, role, email, horseName, stall) {
        this.name = fullName; 
        this.role = role;
        this.email = email;
        this.horseName = horseName;
        this.stall = stall;
        // ^^ if these aren't used here, do I need to include them?
    }
  }
    
// how do I take user inputs from .prompt and use them in my constructor
// font awesome says to but the <script> tag in the head, but shouldn't i put it down here?
module.exports = 
  Employee