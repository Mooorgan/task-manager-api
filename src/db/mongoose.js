const mongoose = require('mongoose')
// const validator=require('validator')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    trim:true,
    useFindAndModify:false
    
})



// const me = new User({
//     name:'     Shaishav      ',
//     email:'MYTYDRTE@gmail.com     ',
//     password: 'Hello1231374'
// })

// me.save().then((result) => {
//      console.log(result)
     
// }).catch((error) => {
//      console.log('Error is!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ', error)
// })



// const task = new Task({
//        description:'    Eat launch'
//     })

//     task.save().then((result) => {
//      console.log(result)
     
// }).catch((error) => {
//      console.log('Error is!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ', error)
// })