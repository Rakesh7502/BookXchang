const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Initialize nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     logger: true,
//     dubug: true,
//     secureConnection: false,
//     auth: {

//         user: 'shaikmohsin5891@gmail.com', // Your Gmail address
//         pass: 'vrtmrhlwrihwmewr' // Your Gmail password
//     },
//     tls: {
//         rejectUnAuthorized: true
//     }
// });
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shaikmohsin5891@gmail.com', // Your Gmail address
        pass: 'vrtmrhlwrihwmewr' // Your Gmail password
    },
  });

// API endpoint to handle book purchase notification
router.post('/:id', async (req, res) => {
    // const { sellerEmail, bookTitle } = req.body;
    // console.log(req.body.book_details)
    
    // Send email notification to seller
    await sendNotificationEmail(req.body.book_details,req.body.buyerDetails);

    res.status(200).json({ success: true, message: 'Notification sent to seller successfully' });
});

// Function to send notification email to seller
const sendNotificationEmail = async (book_details,buyerDetails) => {

    await transporter.sendMail({
        from: 'shaikmohsin5891@gmail.com',
        to: book_details.seller_gmail,
        subject: 'BookXchange - New Purchase Interest',
        text: `Hi ${book_details.seller},

        I hope this email finds you well. I am interested in purchasing the following book you have listed on BookXchange:
    
        Book Title: ${book_details.title}
        Author: ${book_details.author}
        Price: ${book_details.price}
    
        Please find my contact details below:
        Name: ${buyerDetails.name}
        Email: ${buyerDetails.email}
        Phone: ${buyerDetails.phone}
    
        Message: ${buyerDetails.message}
    
        I look forward to your response.
    
        Best regards,
        ${buyerDetails.name}`
    }, (error, info) => {
        if (error) {
            console.error('Error sending email notification:', error);
        } else {
            console.log('Email notification sent:', info.response);
        }
    });
    console.log("executed")
};

module.exports = router
