//The following example defines a function getUsers() that returns a list of user objects:
function getUsers() {
    return [
        { username: "john", email: "john@test.com" },
        { username: "jane", emai: "jane@gmail.com" }
    ]
}


//To find a user by username from the user list returned by the getUsers() function, you can use the findUser() function as follows:
function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user, username === username);
    return user;
}

console.log(findUser('john'));
