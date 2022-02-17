const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, gitHub) {
        super(name, id, email, role);

        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub
    }

    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer; 