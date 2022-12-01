// the follwoing examlpes deefines a function getusers() that returns a list if user objects
function getUsers() {
    return [
        { username: 'john', email: "johnt@gmail.com" },
        { username: 'jane', email: "jane@gmail.com" }
    ]
}

// to find a user by useranme fir the user list reunred by get User() fnunction you can use the findeuser() function as followes
function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user, username === username);
    return user
}

console.log(findUser('john'));