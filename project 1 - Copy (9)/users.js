// to return a list of users

function getUsers(){
    return[
        {username:"john",email:"john@gmail.com"},
        {isername:"jane",email:"jane@gmail.com"}
    ]
}

// to fing specific user
function findUser(username){
    const users = getUsers();
    const user = users.find((user)=>user,username === username);
    return user;
}

console.log(findUser('john'));