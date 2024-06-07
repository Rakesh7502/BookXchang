const express = require('express');
const router = express.Router();
const Books = require('../models/Books')
const fetchuser = require("../middleware/fetchuser")
const { body, validationResult } = require('express-validator')
const nodemailer = require('nodemailer');
// import f from ""

//ROUTE 1-Get all the Books using:GET "/api/books/fetchallbooks".
router.get('/fetchallbooks' ,async (req, res) => {
    try {
        
        const books = await Books.find({ })

        res.json(books)
    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).send("Internal Server Error")
    }
})
router.get('/viewBookDetails/:id' ,async (req, res) => {
    try {
        const book = await Books.findById(req.params.id )
        // console.log(book)
        res.json(book)
    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).send("Internal Server Error")
    }
})
// fetchBooksbyuser
router.get('/fetchuserbooks' ,fetchuser,async (req, res) => {
    try {
        const books = await Books.find({ user:req.user.id})

        res.json(books)
    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).send("Internal Server Error")
    }
})
const multer=require('multer')
// const upload =multer({dest:"uploads/"})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,  uniqueSuffix+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
//ROUTE 2-Add a new Note using:POST "/api/auth/addnote".Login required
router.post('/addbook', fetchuser,upload.single("image"), async (req, res) => {
    try {
        // console.log(req.body);
        // res.send("uploaded!")


        // if there are errors, return bad request and errors
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // handle validation errors
            return res.status(400).json({ errors: errors.array(), message: errors.isEmpty() })

        }
        // console.log(req.body)
        const { title, description, author,price,category,seller,seller_contact,seller_gmail } = req.body;
        const image=req.file.filename;
        const book = new Books({
           title,  description,author,price,category,seller,seller_contact, seller_gmail,image,user: req.user.id

        })
        const savedBook = await book.save()
       
        res.json(savedBook)


        
    }
    catch (error) {
        // console.error(error.message)
        return res.status(500).send("Internal Server Error")
    }

})
//ROUTE 4-Deleting an existing Note using:DELETE"/api/notes/updatenote".Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    
    try{
    // find the note to be updated
    // console.log(req.params)
    let book=await Books.findById(req.params.id);
    // console.log(note)
    if(!book){ return res.status(404).send("Not Found")}
    //allow deletion only id user owns this note
    if(book.user.toString()!==req.user.id){
        return res.status(401).send("Not Allowed");
         
    }
    // console.log(req.params)

    book=await Books.findOneAndDelete(book._id)
   
    res.json({"success":"Note has been deleted",book})
}catch (error) {
    // console.error(error.message)
    return res.status(500).send("Internal Server Error")
}



})






// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     logger:true,
//     dubug:true,
//     secureConnection:false,
//     auth: {
//         user: 'shaikmohsin5891@gmail.com', // Your Gmail address
//         pass: 'vrtmrhlwrihwmewr' // Your Gmail password
//     },
//     tls:{
//         rejectUnAuthorized:true
//     }
// });

// // API endpoint to handle book purchase notification
// router.post('/notify-seller', async (req, res) => {
//     const { sellerEmail, bookTitle } = req.body;

//     // Send email notification to seller
//     await sendNotificationEmail(sellerEmail, bookTitle);

//     res.status(200).json({ success: true, message: 'Notification sent to seller successfully' });
// });

// // Function to send notification email to seller
// const sendNotificationEmail = async (sellerEmail, bookTitle) => {
//     await transporter.sendMail({
//         from: 'shaikmohsin5891@gmail.com',
//         to: sellerEmail,
//         subject: 'BookXchange - New Purchase Interest',
//         // text: `A buyer is interested in purchasing your book "${bookTitle}".`
//         html:"<h1>Welcome</h1><p>That was easy!</p>"
//     }, (error, info) => {
//         if (error) {
//             console.error('Error sending email notification:', error);
//         } else {
//             console.log('Email notification sent:', info.response);
//         }
//     });
// };
module.exports = router
