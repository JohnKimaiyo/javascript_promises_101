// to creeate list if user
function getUsers() {
    return [
        { username: "john", email: "john@gmail.com" },
        { username: "jane", email: "jane@gmail.com" }
    ]
}


// to find a specific user
function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user, username === username);
    return user;
}

console.log(findUser('john'));

