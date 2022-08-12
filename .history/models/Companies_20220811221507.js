const mongoose = require('mongoose');

const CompaniesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: Date.now()
    }
});

module.exports = mongoose.model('Companies', CompaniesSchema);