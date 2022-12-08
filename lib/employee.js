// Parent class
class Employee {
    constructor(fullName, role, email, horseName, stall) {
        this.name = fullName; 
        this.role = role;
        this.email = email;
        this.horseName = horseName;
        this.stall = stall;
    }
  }

module.exports = Employee;