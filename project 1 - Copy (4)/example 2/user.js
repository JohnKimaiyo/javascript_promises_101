// to return a lst of usesrs
function getUsers() {
    return [
        { username: "john", email: "john@gmail.com" },
        { username: "jane", email: "jane@gmail.com" }
    ]
}

// to find speicif user
function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user, username === username);
    return user;
}

console.log(findUser('john'));