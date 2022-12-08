const Employee = require('./employee');

// sub-class
class Manager extends Employee {
    constructor(fullName, role, email, horseName, stall) {
       super(fullName, role, email, horseName, stall)
    }
}
module.exports = Manager; 