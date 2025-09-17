const db = require('./db');
const { UserDAO } = require('./userDAO');
const userDAO = new UserDAO(db);


function addUser(user){
    return userDAO.addUser(user);
}


function getUserById(id){
    return userDAO.getUserById(id);
}


module.exports = { addUser, getUserById };