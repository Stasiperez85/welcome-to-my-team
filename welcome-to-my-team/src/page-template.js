const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// code to generate cards
function generateCards(myTeam) {
    var cards = [];
    for (var i = 0; i < myTeam.length; i++) {
        var myTeamArray = myTeam[i];
        switch (myTeamArray.getRole()) {
            case 'Manager':
                const manager = new Manager(myTeamArray.id, myTeamArray.name, myTeamArray.email, myTeamArray.officeNumber);
                cards.push(generateManager(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(myTeamArray.id, myTeamArray.name, myTeamArray.email, myTeamArray.gitHub);
                cards.push(generateEngineer(engineer));
                break;
            case 'Intern':
                const intern = new Intern(myTeamArray.id, myTeamArray.name, myTeamArray.email, myTeamArray.school);
                cards.push(generateIntern(intern));
                break;
        }
        return cards.join(``)
    }
}

const generateManager = manager => {
    return `
        <div class="card team-card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h3 class="card-title">${manager.getName()}</h3>
            <h4 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a> </li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
        `;
};

const generateEngineer = engineer => {
    return `
        <div class="card team-card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h3 class="card-title">${engineer.getName()}</h3>
            <h4 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a> </li>
            <li class="list-group-item">GitHub: ${engineer.getGitHub()}</li>
        </ul>
    </div>
        `;
};


const generateIntern = intern => {
    return `
        <div class="card team-card" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
            <h3 class="card-title">${intern.getName()}</h3>
            <h4 class="card-title"><i class="fas fa-glasses mr-2"></i>${intern.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
        `;
};

function generatePage(myTeam) {
    console.log(myTeam);
    return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="../dist/style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  
  <body>
    <header class="container-fluid bg-danger">
      <div class="row">
       <h1 class="col-12 text-white mb-3 text-center">My Team</h1>
     </div>
   </header>
      <div class="card" style="width: 18rem;">
         ${generateCards(myTeam)}
      </div>
  </body>
  </html>
  `;
};



module.exports = generatePage;