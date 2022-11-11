
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app).listen(process.env.PORT || 8000);;
var cors = require('cors');
app.use(cors({origin: 'https://akhil-warta.netlify.app'}));
const io = require('socket.io')(server,{
    cors: {
        origin: 'https://akhil-warta.netlify.app'
        // origin: 'http://127.0.0.1:5500' 
       // header: ('Access-Control-Allow-Origin', "*")
    }
}); 

// const users = {};

// io.on("connection", socket =>{
//    // console.log("New user" ,socket.id);
//     socket.on('new-user-joined', name1 =>{
//         console.log('New user', name1);
//         users[socket.id] = name1;
//         socket.broadcast.emit('user-joined' , name1);
//     });

//     socket.on('send', message =>{
//         socket.broadcast.emit('receive',{message: message, name1: users[socket.id]});
//     });
//     socket.on('disconnect', message =>{
//         socket.broadcast.emit('leave',{message: message, name1: users[socket.id]});
//         delete users[socket.id];
//     });

// });

const users = {};
//const userName = [];
io.on("connection", socket =>{
   // console.log("New user" ,socket.id);

    socket.on('new-user-joined', (name1, room) =>{
        
        //userName.push(name1);
        socket.join(room);
        console.log('New user', name1);
        users[socket.id] = name1;
        socket.to(room).emit('user-joined' , name1); // {name1, creator:userName[0]});
    });

    socket.on('send', (message, room) =>{
        socket.to(room).emit('receive',{message: message, name1: users[socket.id]});
    });
    socket.on("room" , (room) =>{
        socket.on('disconnect', () =>{
        socket.to(room).emit('leave',{ name1: users[socket.id]});
        delete users[socket.id];
    });
})


});
