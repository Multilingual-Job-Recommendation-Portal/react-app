const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const corporateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: 'corporate'
    }
});

corporateSchema.index({ email: 'unique' });

module.exports = mongoose.model('Corporate', corporateSchema);