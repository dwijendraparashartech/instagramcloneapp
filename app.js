const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 5000
const {MONGOURI} = require('./keys')





mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log("connected on mongo yeahh")

})

mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)

})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

// const customMiddleware =(req,res,next) => {
//     console.log("middleware executed!")
//     next()  
// }

// app.use(customMiddleware)


// app.get('/',(req,res)=>{
//   console.log("home")
//   res.send("hello world")
// })

// app.get('/about',customMiddleware,(req,res)=>{
//     console.log("about")
//     res.send("about page")
//   })

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})



