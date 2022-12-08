const Employee = require('./employee');

class ranchHand extends Employee {
    constructor(fullName, role, email, horseName, stall, github) {
        super(fullName, role, email, horseName, stall)
        this.github = github;
    }
    generateRanchHandCard() {
        return ` 
        <div class="card cstm-card" style="width: 25rem;">
        <div class="card-header cstm-header">
            <h3>${this.name}</h3>
            <h4>${this.role}<i class="fa-solid fa-magnet"></i></h4> 
        </div>
        <ul class="list-group-flush cstm-body">
            <li class="list-group-item">Horse Name: ${this.horseName}</li>
            <li class="list-group-item">Stall: ${this.stall}</li>
            <li class="list-group-item">Email: ${this.email}</li>
            <li class="list-group-item>Outlaw Alias: ${this.gitHub}</li>
        </ul>
    </div>
    `
    }
}

module.exports = ranchHand