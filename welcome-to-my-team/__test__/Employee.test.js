const Employee = require('../lib/Employee');

const employee = new Employee('ellie', '235689', 'ellie@sillymail.com');

test('creates the employee information', () => {

    expect(employee.name).toBe('ellie');
    expect(employee.id).toBe('235689');
    expect(employee.email).toBe('ellie@sillymail.com');
});

test('test if it can get name', () => {
    expect(employee.getName()).toBe('ellie');
});

test('test if it can get id', () => {
    expect(employee.getId()).toBe('235689');
});

test('test if it can get email', () => {
    expect(employee.getEmail()).toBe('ellie@sillymail.com');
});

test('test if it can get role', () => {
    expect(employee.getRole()).toBe('Employee');
});


test('test if it can instantiate', () => {
    let employee = new Employee()
    expect(typeof employee).toBe("object")
});
