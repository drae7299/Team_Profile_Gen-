const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Should create a member", => () {
        const testName = "Andre";
        const testEmail = "drae7299@gmail.com"
        const testId = "399739"
        const testRole = "Employee"
        let e = new Employee(testName, testEmail, testId, testRole);

        expect(e.name).toEqual(testName);
        expect(e.email).toEqual(testEmail);
        expect(e.id).toEqual(testId);
        expect(e.role).toEqual(testRole);

    }
);

describe("getName" , () =>  {

    it("Should aquire a name", () => {
        const test = "Name";
        let eName = new Employee(test);
        expect(eName.getName()).toEqual(test);


    })
});

describe("getEmail" , () => {
  
    it("should aquire an email" , () => {
        const test = "Email";
        let eEmail = new Employee(test);
        expect(eEmail.getName()).toEqual("Name" , test);
    })
});

describe("getId", () => {

    it("Should get an id", () => {
        const test = "ID";
        let eId = new Employee(test);
        expect(eId.getId()).toEqual("Name", "Email" , test);
    });
});
});  

module.exports = Employee;