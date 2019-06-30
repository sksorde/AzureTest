var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstName: { type: String, Required: 'First name cannot be left blank.' },
    lastName: { type: String, Required: 'Last name cannot be left blank.' },
    created: { type: Date, default: Date.now },
    createdby: String,
    emailId: String,
    username: String,
    password: String,
    rememberPassword: Boolean
});

module.exports = mongoose.model('users', userSchema);