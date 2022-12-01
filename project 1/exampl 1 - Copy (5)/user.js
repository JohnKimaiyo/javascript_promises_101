// to retur a list of users
function getUsers() {
    return ([
        { username: "john", email: "john@test.com" },
        { username: "jane", email: "jane@test.com" }
    ]);
}

// to fid specific user
function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user, username === username);
    return user;
}

console.log(findUser('john'));