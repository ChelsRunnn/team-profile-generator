const Employee = require("./employee");

class Manager extends Employee {
    constructor(fullName, role, email, horseName, stall) {
        this.name = fullName; 
        this.role = role;
        this.email = email;
        this.horseName = horseName;
        this.stall = stall;
}
    generateCard() {
        return ` 
        <div class="card cstm-card" style="width: 25rem;">
        <div class="card-header cstm-header">
            <h3>${this.name}</h3>
            <h4>${this.role}</h4> 
        </div>
        <ul class="list-group-flush cstm-body">
            <li class="list-group-item">Horse Name: ${this.horseName}</li>
            <li class="list-group-item">Stall: ${this.stall}</li>
            <li class="list-group-item">Email: ${this.email}</li>
        </ul>
    </div>
    `
    }
}
// TODO: include badge/icon corresponding with specific role?

module.exports = Manager; 