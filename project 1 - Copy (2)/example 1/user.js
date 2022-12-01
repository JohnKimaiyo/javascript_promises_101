// to return a ,ist of users
function getUsers() {
    return [
        { username: "john", email: "john@gmail.com" },
        { usrname: "jane", email: "jane@gmail.com" }
    ]
}

// to find specific user
function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => username === username);
    return user;
}

console.log(findUser('john'));