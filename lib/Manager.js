class Manager {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Manager";
      this.officeNumber = officeNumber;
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
    getOfficeNumber() {
        return this.officeNumber;
    }
  }
  
  module.exports = Manager;
  

