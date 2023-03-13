// My Attempt
const Manager = require("../lib/Manager");

test("Can create an office number.", () => {
    const mockOfficeNumber = 2;
    const teamMember = new Manager("Carlos", 2, "carlos@gmail.com", mockOfficeNumber);
    expect(teamMember.officeNumber).toBe(mockOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const mockOfficeNumber = 2;
    const teamMember = new Manager("Carlos", 2, "carlos@gmail.com", mockOfficeNumber);
    expect(teamMember.getOfficeNumber()).toBe(mockOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const teamMember = new Manager("Carlos", 2, "carlos@gmail.com", 2);
    expect(teamMember.getRole()).toBe(returnValue);
});