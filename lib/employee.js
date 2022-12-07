class Employee {
    constructor(fullName, role, email, stall) {
        this.name = fullName; 
        this.role = role;
        this.email = email;
        this.horseName = horseName;
        this.stall = stall;
    }
    printInfo() {
    console.log(`${this.name} is a ${this.role}. They ride ${this.horseName} who's in ${this.stall}. You can reach them at ${this.email}`)
    }
}
// how do I take user inputs from .prompt and use them in my constructor
module.exports = Employee;