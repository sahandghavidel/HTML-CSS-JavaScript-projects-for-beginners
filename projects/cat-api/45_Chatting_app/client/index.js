//  import {io} from "./node_modules/socket.io-client";
//const io = require('socket.io-client');

var name1, room;
//var nameArray = [];



function viewSelection(){
    
    name1 =  document.querySelector("#name").value;
    room =  document.querySelector("#roomC").value;
    
    if(name1 === '') { 
        alert("Name cannot be empty");
        return false;
    }
    else if(room === ''){ 
         alert("Please provide a room name");
         return false;
         }
    document.body.style.background = "#efe7dd url('https://cloud.githubusercontent.com/assets/398893/15136779/4e765036-1639-11e6-9201-67e728e86f39.jpg') repeat";


    const form = document.getElementById("form-container");
    const messageInput = document.querySelector(".input-msg");
    const messageContainer = document.querySelector(".conversation-container");

    const appendCopyright = (message) => {
    
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        messageElement.classList.add('otherCopyright');
        messageContainer.append(messageElement);
        try{
        new Audio('message.mp3').play();
        }
        catch(err){
            new Audio('message.mp3').play();
    
        }
       
    }    
    appendCopyright("Copyright © Akhil Choubey");

    if(document.querySelector("#create-room").checked){
        alert(`Share following details with your chatmates\r\n ----------------------------------------------- \r\n Website link : https://akhil-warta.netlify.app \r\n Room name : ${room}`);
        // appendCopyright("You created this room");
        // nameArray.push(name1);
    } 
   
    //console.log(nameArray);
    document.querySelector(".chat").style.display = 'block';
    document.querySelector(".new-room").style.display = 'none';

    document.querySelector(".status-bar h4").innerText = `Room Name : ${room}`;
    // const socket = io("http://localhost:8000");
    const socket = io("https://guarded-falls-33664.herokuapp.com/");


const append = (message) => {
    
    //if(document.querySelector("#join-room").checked){
   //     appendCopyright(`${cruator} created this room`);
    //}
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('other');
    messageContainer.append(messageElement);
    try{
    new Audio('message.mp3').play();
    }
    catch(err){
        new Audio('message.mp3').play();

    }
   
}

const appendSend = (message) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add('sent');
    messageContainer.append(messageElement);
}

const appendRecieved = (message, name) => {
    

    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add('received');

    const Name = document.createElement('h1');
    Name.classList.add('person');
    Name.innerText= name;

    const randomColor =((1<<24)*Math.random() | 0).toString(16)
    if(randomColor[0] === "0") randomColor = "800080";
    const color = "#"+randomColor;

    messageElement.innerHTML+=`<h1 class='person' style="color: ${color};" >${name}</h1>
    ${message}`;

    //messageElement.innerText = message;
    messageContainer.append(messageElement);

    try{
    new Audio('message.mp3').play();
    }
    catch(err){
        new Audio('message.mp3').play();

    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    appendSend(`${message}`);
    socket.emit('send', message, room);
    messageInput.value = '';
});

socket.emit("new-user-joined" , name1, room);
socket.emit("room" , room);
//var curator = 0;
//if(document.querySelector("#join-room").checked) {
  //  curator = 1;
//}
socket.on('user-joined', (name1) =>{
    append(`${name1} joined` ); //, data.creator);
    
  //  appendCopyright(`${data.creator} created this room`);
    
});


socket.on('leave', (data) =>{
    append(`${data.name1} left`);
});

socket.on('receive', (data) =>{
    appendRecieved(`${data.message}`,`${data.name1}`);
});





}