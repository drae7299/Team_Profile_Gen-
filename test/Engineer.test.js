const Employee = require("../lib/Engineer");

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id,);
        this.github = github;
        this.role = "Engineer";
    }
    getGitHub() {
        return this.github;
    }
}
module.exports = Engineer;