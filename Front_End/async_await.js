//https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial

//callback hell
// Verify the username and password of a user.
// Get application roles for the user.
// Log application access time for the user.

const verifiedUser = function(username, password, callback){
    dataBase.verifyUser(username, password, (error, userInfo) => {
        if (error) {
            callback(error)
        }else{
            dataBase.getRoles(username, (error, roles) => {
                if (error){
                    callback(error)
                }else {
                    dataBase.logAccess(username, (error) => {
                        if (error){
                            callback(error);
                        }else{
                            callback(null, userInfo, roles);
                        }
                    })
                }
            })
        }
    })
 };

 const getRoles = function (username, callback){
    database.connect((connection) => {
        connection.query('get roles sql', (result) => {
            callback(null, result);
        })
    });
 };



 //Async/Await
const verifyUser = async (username, password) => {
    try {
    const verified = await dataBase.verifyUser(username, password)
    const gotRoles = await dataBase.getRoles(verified)
    const logedAccess = await dataBase.logAccess(verified)
    }
    catch(error) {
        console.log(error)
    }
}