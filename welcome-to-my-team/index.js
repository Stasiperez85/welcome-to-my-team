// TODO: Include packages needed for this application
const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const Manager = require('./lib/Manager');

// TODO: Create an array of questions for input
myTeam = [];
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name (Required)?',
            //   vaildate to check that name was provided
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name');
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?',
            //   vaildate to check that id was provided
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your id number');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            //   vaildate to check that email was provided
            validate: EmailInput => {
                if (EmailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                }
            }
        },
    ]);
};

promptUser().then(answers => console.log(answers));


fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;

    console.log('Team Portfolio complete! Check out index.html to see the output!');
});