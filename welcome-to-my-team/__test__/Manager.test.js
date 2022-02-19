const Manager = require('../lib/Manager');

const manager = new Manager('ellie', '235689', 'ellie@sillymail.com', '555-555-5555');

test('creates the employee information', () => {

    expect(manager.name).toBe('ellie');
    expect(manager.id).toBe('235689');
    expect(manager.email).toBe('ellie@sillymail.com');
    expect(manager.officeNumber).toBe('555-555-5555');
});

test('test if it can get name', () => {
    expect(manager.getName()).toBe('ellie');
});

test('test if it can get id', () => {
    expect(manager.getId()).toBe('235689');
});

test('test if it can get email', () => {
    expect(manager.getEmail()).toBe('ellie@sillymail.com');
});

test('test if it can get role', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('test if it can get office number', () => {
    expect(manager.getOfficeNumber()).toBe('555-555-5555');
});

