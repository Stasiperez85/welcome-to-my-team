const Employee = require('../lib/Employee');

test('creates the employee information', () => {
    const employee = new Employee('ellie', '235689', 'ellie@sillymail.com');

    expect(employee.name).toBe('ellie');
    expect(employee.id).toBe('235689');
    expect(employee.email).toBe('ellie@sillymail.com');
});

