// to return a list of users
function getUsers() {
    return [
        { username: "john", email: "john@test.com" },
        { username: "jane", emai: "jane@gmail.com" }
    ]
}


//to find speciifc user
function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user, username === username);
    return user;
}

console.log(findUser('john'));