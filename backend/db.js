const mongoose=require('mongoose')
// const mongoURI=process.env.CONN_STR
// const mongoURI="mongodb+srv://admin:3MbgrcBFgmrZzAeo@cluster0.qvkkvws.mongodb.net/BookXchange?retryWrites=true&w=majority&appName=Cluster0"
const dotenv=require('dotenv')
dotenv.config({path:'config.env'})
// console.log(process.env.CONN_STR)
const connectToMongo=async ()=>{
    await mongoose.connect(process.env.CONN_STR,{useNewUrlParser:true}).then(()=>{
        console.log('connected to Mongo')

    }).catch(err=>console.log(err));

    
}
module.exports=connectToMongo;