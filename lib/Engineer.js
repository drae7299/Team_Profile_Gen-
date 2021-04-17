class Engineer {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Engineer";
      this.github =github
    }
    getName() {
      return this.name;
    }
    getID() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getRole() {
      return this.role;
    }
    getGitHub() {
        return this.github;
    }
  }
  
  module.exports = Engineer;
  