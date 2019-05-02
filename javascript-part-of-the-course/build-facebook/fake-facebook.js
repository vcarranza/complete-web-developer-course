var database = [
    {
        username: "vcarranza7",
        password: "bitwise"
    },
    {
        username: "sandy",
        password: "1234"
    },
    {
        username: "bobby",
        password: "1234"
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

function isUserValid(username, password){
    for (var i=0; i< database.length; i++){
        if(database[i].username === username &&
            database[i].password === password) {
                return true;
        } 
    }
    return false;
}

function signIn(username, password){
    for (var i=0; i< database.length; i++){
        if(isUserValid(username, password)) {
                console.log(newsFeed);
            } else {
                alert("Sorry, wrong username and password");
            } 
    }
        
}

signIn(userNamePrompt, passwordPrompt);
var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password");
