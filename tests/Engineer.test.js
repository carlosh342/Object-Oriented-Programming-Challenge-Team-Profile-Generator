const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const mockGithub = "Carlos";
    const teamMember = new Engineer("Carlos", 2, "carlos@gmail.com", mockGithub);
    expect(teamMember.github).toBe(mockGithub);
});

test("Testing getGithub will return github.", () => {
    const mockGithub = "Carlos";
    const teamMember = new Engineer("Carlos", 2, "carlos@gmail.com", mockGithub);
    expect(teamMember.getGithub()).toBe(mockGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const teamMember = new Engineer("Carlos", 2, "carlos@gmail.com", "Carlos");
    expect(teamMember.getRole()).toBe(returnValue);
});