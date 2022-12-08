const Employee = require('./employee');

// sub-class
class ranchHand extends Employee {
    constructor(fullName, role, email, horseName, stall, gitHub) {
        super(fullName, role, email, horseName, stall)
        this.github = gitHub;
    }
}

module.exports = ranchHand;