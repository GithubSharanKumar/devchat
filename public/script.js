const socket = io();

const messages = document.getElementById("messages");

function sendMessage(){

    const username = document.getElementById("username").value;

    const message = document.getElementById("message").value;

    if(username === "" || message === "")
        return;

    socket.emit("chat-message",{

        username,
        message

    });

    document.getElementById("message").value="";

}

socket.on("chat-message",(data)=>{

    const div=document.createElement("div");

    div.className="message";

    div.innerHTML="<b>"+data.username+"</b>: "+data.message;

    messages.appendChild(div);

    messages.scrollTop=messages.scrollHeight;

});