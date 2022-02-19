const Intern = require('../lib/Intern');

const intern = new Intern('ellie', '235689', 'ellie@sillymail.com', 'UofU');

test('creates the employee information', () => {

    expect(intern.name).toBe('ellie');
    expect(intern.id).toBe('235689');
    expect(intern.email).toBe('ellie@sillymail.com');
    expect(intern.school).toBe('UofU');
});

test('test if it can get name', () => {
    expect(intern.getName()).toBe('ellie');
});

test('test if it can get id', () => {
    expect(intern.getId()).toBe('235689');
});

test('test if it can get email', () => {
    expect(intern.getEmail()).toBe('ellie@sillymail.com');
});

test('test if it can get role', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('test if it can get school', () => {
    expect(intern.getSchool()).toBe('UofU');
});