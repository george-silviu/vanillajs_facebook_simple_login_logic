var database = [
  {
    username: "george",
    password: "1243",
  },
  {
    username: "olivia",
    password: "456",
  },
  {
    username: "maria",
    password: "555",
  },
];

var newsFeed = [
  { username: "Olivia", timeline: "Busy to improve" },
  { username: "George", timeline: "Hello! Just came bach from vacay!" },
  { username: "Maria", timeline: "Javascript is so cool." },
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log(newsFeed);
  } else {
    alert("Password or username are incorrect.");
  }
}

var userNamePrompt = prompt("Insert username:");
var passwordPrompt = prompt("Insert password:");

signIn(userNamePrompt, passwordPrompt);
