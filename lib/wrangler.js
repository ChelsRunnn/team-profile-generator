const Employee = require('./employee');

// sub-class
class Wrangler extends Employee {
    constructor(fullName, role, email, horseName, stall, gitHub) {
        super(fullName, role, email, horseName, stall)
        this.gitHub = gitHub;
}
}

module.exports = Wrangler;