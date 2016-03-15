/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose'),
        crypto = require('crypto'),
        Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        index: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: 'Username is required'
    },
    password: {
        type: String,
        validate: [
            function (password) {
                return password && password.length >= 6;
            },
            'Password must be at least 6 characters long.'
        ]
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: "Provider is required"

    },
    providerId: String,
    providerData: {},
    created: {
        type: Date,
        default: Date.now
    },
    website: {
        type: String,
        set: function (url) {
            if (!url) {
                return url;
            } else {
                if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
                    url = 'http://' + url;
                } else {
                    return url;
                }
            }
        }
    },
    role: {
        type: String,
        enum: ['Admin', 'Owner', 'User']
    }
});

UserSchema.virtual('fullName')
        .get(function () {
            return this.firstName + " " + this.lastName;
        })
        .set(function (fullName) {
            var splitName = fullName.split(' ');
            this.firstName = splitName[0] || '';
            this.lastName = splitName[1] || '';
        });

UserSchema.pre('save', function (next) {

    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }

    next();

});

UserSchema.methods.hashPassword = function (password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.statics.findOneByUsername = function (username, callback) {
    this.findOne({username: new RegExp(username, 'i')}, callback);
};

UserSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};

UserSchema.statics.findUniqueUsername = function (username, suffix, callback) {
    var _this = this;

    // Add a 'username' suffix
    var possibleUsername = username + (suffix || '');

    // Use the 'User' model 'findOne' method to find an available unique username
    _this.findOne({
        username: possibleUsername
    }, function (err, user) {
        // If an error occurs call the callback with a null value, otherwise find find an available unique username
        if (!err) {
            // If an available unique username was found call the callback method, otherwise call the 'findUniqueUsername' method again with a new suffix
            if (!user) {
                callback(possibleUsername);
            } else {
                return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
            }
        } else {
            callback(null);
        }
    });
};

UserSchema.set('toJSON',
        {getters: true,
            virtuals: true});

mongoose.model('User', UserSchema);


