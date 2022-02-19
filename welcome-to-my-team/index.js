// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


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
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                }
            }
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is your office number?',
            //   vaildate to check that number was provided
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                }
            }
        },
        {
            type: 'list',
            name: 'teamAdd',
            message: 'Select the member you would like to add next.',
            choices: ['Engineer', 'Intern', 'Done'],
        }
    ])
        .then((answersM) => {
            const manager = new Manager(answersM.name, answersM.id, answersM.email, answersM.number)
            myTeam.push(manager)

            switch (answersM.teamAdd) {
                case 'Engineer':
                    promptEngineer();
                    break;
                case 'Intern':
                    promptIntern();
                    break;
                default:
                    writeToFile('dist/index.html', generatePage(myTeam))
            }
        })
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name (Required)?",
            //   vaildate to check that name was provided
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the name");
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id?',
            //   vaildate to check that id was provided
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the id number');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineers's email address?",
            //   vaildate to check that email was provided
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address');
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the Github Username',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'teamAdd',
            message: 'Select the member you would like to add next.',
            choices: ['Engineer', 'Intern', 'Done'],
        }
    ])
        .then((answersE) => {
            const engineer = new Engineer(answersE.name, answersE.id, answersE.email, answersE.github)
            myTeam.push(engineer)

            switch (answersE.teamAdd) {
                case 'Engineer':
                    promptEngineer();
                    break;
                case 'Intern':
                    promptIntern();
                    break;
                default:
                    writeToFile('dist/index.html', generatePage(myTeam))
            }
        })
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the inter's name (Required)?",
            //   vaildate to check that name was provided
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter inter's name");
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id?',
            //   vaildate to check that id was provided
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter id number');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            //   vaildate to check that email was provided
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter inter's email address");
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where did the intern attend school?',
        },
        {
            type: 'list',
            name: 'teamAdd',
            message: 'Select the member you would like to add next.',
            choices: ['Engineer', 'Intern', 'Done'],
        }
    ])
        .then((answersI) => {
            const intern = new Intern(answersI.name, answersI.id, answersI.email, answersI.school);
            myTeam.push(intern)

            switch (answersI.teamAdd) {
                case 'Engineer':
                    promptEngineer();
                    break;
                case 'Intern':
                    promtIntern();
                    break;
                default:
                    writeToFile('dist/index.html', generatePage(myTeam))
            }
        })
};

promptManager();


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;

        console.log('Team Portfolio complete! Check out index.html to see the output!');
    });
};

// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// // TODO: Create a function to initialize app
// function init() {
//     promptManager();
//     // .then((inquirerResponse) => {
//     //     console.log("Team Portfolio is complete");
//     //     console.log(inquirerResponse);

//     //     // console.log(markdown(inquirerResponse));
//     //     fs.writeFile('./index.html', pageHTML, ({ inquirerResponse }));
//     // })
//     // .catch(err => {
//     //     console.log(err)
//     // });
// }

// // Function call to initialize app
// init();