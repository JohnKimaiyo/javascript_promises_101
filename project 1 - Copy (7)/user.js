// to return a list of user
function getUsers() {
    return [

        { username: "john", email: "john@gmail.com" },
        { username: "jane", email: "jane@gmail.com" }
    ]
}

// ti find specfic use
function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user, username === username);
    return user;
}

console.log(findUser('john'));
