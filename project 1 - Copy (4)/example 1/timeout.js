// delayed simulation get user request
function getUsers(callback) {
    setTimeout(() => {
        callback([
            { username: 'john', email: "john@gmial.com" },
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

findUser('john', console.log);