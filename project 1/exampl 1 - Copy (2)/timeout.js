//to simulate the delay ,you can use the setimeout() function.for example
function getUsers(callback) {
    setTimeout(() => {
        callback([
            { username: "john", email: "john@gmail.com" },
            { username: "jane", email: "janem@gmail.com" }
        ]);
    }, 1000);
}

function findUser(username, callback) {
    getUsers((users) => {
        const user = users.find((user) => user.username === username);
        callback(user);
    });
}

findUser('john', console.log)