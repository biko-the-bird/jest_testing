const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = {
            firstName: 'kyle'
        }
        user['lastName'] = "ozymandius"
        return user;
    },
    checkLoad: (cargo) => {
        return cargo.reduce((a, b) => a + b)
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/3')
        .then(res => res.data)
        .catch(err => err.data)

}
module.exports = functions