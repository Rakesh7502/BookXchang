const connectToMongo=require('./db')
const express = require('express')
const bodyParser = require('body-parser');
connectToMongo();
const app = express()
const port = 9000
var cors = require('cors')

// app.use(bodyParser.json());
app.use(cors({
   origin: ['https://book-xchange-client.vercel.app/'],
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json())
//available routess
app.get("/",(req,res)=>{res.json("Hello")})
app.use('/api/auth',require('./routes/auth'))
app.use('/api/books',require('./routes/books'))
app.use('/api/books/viewBookDetails',require('./routes/notify_seller'))


app.listen(port, () => {
  console.log(`BookXchange backend is listening on port http://localhost:${port}`)
})

