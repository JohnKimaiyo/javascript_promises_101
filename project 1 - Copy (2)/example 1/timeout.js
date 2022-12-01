// timeout to get user
function getUsers(callback) {
    setTimeout(() => {
        callback([
            { username: "john", email: "john@gmailcom" },
            { username: "jane", email: "jane@gmail.com" }
        ])
    }, 1000);
}

function findUser(username, callback) {
    getUsers((users) => {
        const user = users.find((user) => user.username === username);
        callback(user);
    })
}

findUser("john", console.log);