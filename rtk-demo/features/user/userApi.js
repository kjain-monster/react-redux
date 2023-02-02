const users = require("./data");

const fetchUsersApi = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(users), 500);
  });

const fetchUsersErrorApi = () =>
  new Promise((_, reject) => {
    setTimeout(() => reject("Wrong 'fetchUsers' called"), 500);
  });

module.exports.fetchUsersApi = fetchUsersApi;
module.exports.fetchUsersErrorApi = fetchUsersErrorApi;
