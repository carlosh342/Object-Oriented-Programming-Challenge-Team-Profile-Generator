const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const mockSchool = "School Name";
    const teamMember = new Intern("Carlos", 3, "carlos@gmail.com", mockSchool);
    expect(teamMember.school).toBe(mockSchool);
});

test("Testing officeNumber will return office number.", () => {
    const mockSchool = "School Name";
    const teamMember = new Intern("James", 3, "carlos@gmail.com", mockSchool);
    expect(teamMember.getSchool()).toBe(mockSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const teamMember = new Intern("Carlos", 3, "carlos@gmail.com", "School Name");
    expect(teamMember.getRole()).toBe(returnValue);
});