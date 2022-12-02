// to retuen list f users
function getUsers() {
    return [
        { username: "john", email: "john@gmail.com" },
        { username: "jane", email: "jane@gmail.com" }
    ]

}
// to find speicif users
function findUser(username) {
    const users = getUsers();
    const user = users.find((user) => user, username === username);
    return user;
}

console.log(findUser('john'));