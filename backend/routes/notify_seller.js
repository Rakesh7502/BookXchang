const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Initialize nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    logger: true,
    dubug: true,
    secureConnection: false,
    auth: {
        user: 'shaikmohsin5891@gmail.com', // Your Gmail address
        pass: 'vrtmrhlwrihwmewr' // Your Gmail password
    },
      tls: {
        rejectUnAuthorized: true
    }
});

// API endpoint to handle book purchase notification
router.post('/:id', async (req, res) => {
    const { sellerEmail, bookTitle } = req.body;

    // Send email notification to seller
    await sendNotificationEmail(sellerEmail, bookTitle);

    res.status(200).json({ success: true, message: 'Notification sent to seller successfully' });
});

// Function to send notification email to seller
const sendNotificationEmail = async (sellerEmail, bookTitle) => {
    await transporter.sendMail({
        from: 'shaikmohsin5891@gmail.com',
        to: sellerEmail,
        subject: 'BookXchange - New Purchase Interest',
        text: `A buyer is interested in purchasing your book "${bookTitle}".`
    }, (error, info) => {
        if (error) {
            console.error('Error sending email notification:', error);
        } else {
            console.log('Email notification sent:', info.response);
        }
    });
};

module.exports = router
