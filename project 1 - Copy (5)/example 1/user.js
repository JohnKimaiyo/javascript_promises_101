// to get list of users
function getUsers() {
    return [
        { username: "john", email: "john@gmail.com" },
        { uername: "jane", email: "jane@gmail.com" }
    ]
}

// to get specific user
function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user, username === username);
    return user;
}

console.log(findUser('john'));