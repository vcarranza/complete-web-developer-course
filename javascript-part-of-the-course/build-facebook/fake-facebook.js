var database = [
    {
    username: "vcarranza7",
    password: "bitwise"
    }
];

var newsFeed = [
    {
        username:"jonelle45",
        timeline: "another day at this job"
    },
    {
        username:"jacobrivas56",
        timeline: "yet another copier guy ughh"
    },
    {
        username:"honeybadger10",
        timeline:"i miss mijo in the office screw the other guy"
    }
];


var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password");

function signIn(user, pass){
    if (user === database[0].username && 
        pass === database[0].password) {
            console.log(newsFeed);
        } else {
            alert("Sorry, wrong username and password!");
        }
        
}

signIn(userNamePrompt, passwordPrompt);