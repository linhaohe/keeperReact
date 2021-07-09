const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose.connect("mongodb://localhost:27017/notesDB",{useNewUrlParser:true, useUnifiedTopology: true});

const noteSechema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"name is require"]
      },
    content:String
});

const Note = mongoose.model("notes",noteSechema);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin:"http://localhost:3000",
    methods:['GET','POST']
}));

app.listen(9000,function(){
    console.log("Server started at 9000")
});

app.post('/post',function(request,response){
    // const  userInput = request.body;
    // console.log(userInput);
    const userInput = new Note(request.body);
    console.log(userInput)
    userInput.save();
    response.send(userInput._id);
});

app.get('/get',function(requset,response){
    Note.find(function(err,notes){
        if(err){
          console.log(err)
        }else{
          response.send(notes)
        }
    }
)})

//CORS prevent the psot request 
app.post('/delete',function(request,response){
    const userInput = request.body;
    Note.deleteOne(userInput,err=>{
        if(err){
            response.send(err);
        }else{
            response.send("Sucess");
        }
    });
})