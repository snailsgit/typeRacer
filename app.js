const express=require('express');
const app=express();
const socketio=require('socket.io');
const mongoose=require('mongoose');



const expressServer=app.listen(3001);
// passed the http object to socket io server.Now this io can be used to listen to events.
const io=socketio(expressServer);

const Game=require("./Models/Game");

mongoose.connect('mongodb://localhost:27017/typeRacer',{useNewUrlParse:true,useUnifiedTopology:true},()=>{
    console.log('connected to the database');
});
