
test("Can create a new team member.", () => {
    const teamMember = new Employee();
    expect(typeof(teamMember)).toBe("object");
})

test("Testing name.", () => {
    const name = "Carlos";
    const teamMember = new Employee(name);
    expect(teamMember.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const teamMember = new Employee("Carlos", id);
    expect(teamMember.id).toBe(id);
})

test("Testing email.", () => {
    const email = "jcarlos@gmail.com";
    const teamMember = new Employee("Carlos", 2, email);
    expect(teamMember.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "Carlos";
    const teamMember = new Employee(testName);
    expect(teamMember.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 2;
    const teamMember = new Employee("Carlos", testID);
    expect(teamMember.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "carlos@gmail.com";
    const teamMember = new Employee("Carlos", 2, testEmail);
    expect(teamMember.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const teamMember = new Employee("Carlos", 2, "carlos@gmail.com");
    expect(teamMember.getRole()).toBe(returnValue);
})