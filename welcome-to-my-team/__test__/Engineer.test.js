const Engineer = require('../lib/Engineer');

const engineer = new Engineer('ellie', '235689', 'ellie@sillymail.com', 'ellie55',);

test('creates the employee information', () => {

    expect(engineer.name).toBe('ellie');
    expect(engineer.id).toBe('235689');
    expect(engineer.email).toBe('ellie@sillymail.com');
    expect(engineer.gitHub).toBe('ellie55');
});

test('test if it can get name', () => {
    expect(engineer.getName()).toBe('ellie');
});

test('test if it can get id', () => {
    expect(engineer.getId()).toBe('235689');
});

test('test if it can get email', () => {
    expect(engineer.getEmail()).toBe('ellie@sillymail.com');
});

test('test if it can get role', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test('test if it can get github username', () => {
    expect(engineer.getGitHub()).toBe('ellie55');
});





