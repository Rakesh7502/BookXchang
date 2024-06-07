const mongoose = require('mongoose');
const Mail = require('nodemailer/lib/mailer');

const bookSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },

    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    seller: {
        type: String,
        required: true

    },
    seller_contact: {
        type: String,
        required: true

    },
    seller_gmail:{
        type:String,
        required:true

    },
    image:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Book', bookSchema);
