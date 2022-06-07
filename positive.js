
const messages = 
[
"Have a great day!", "Cheer up!", "The world always looks brighter when you smile!",
"Stay strong", "Be confident and don't let anyone put you down", "Nothing is impossible!", "Live life to the fullest and focus on the positive",
"Believe in yourself", "Do good and good will come to you", "You can do it!", "Never give up on your dreams",
"Take care of yourself", "Keep going and never stop"
];


function newMessage() 
{
    var anotherMessage = document.getElementById("message").innerHTML = messages[Math.floor(Math.random() * messages.length)];
    if (anotherMessage == messages)
    {
        messages[Math.floor(Math.random() * messages.length)];
    }
    else {messages[Math.floor(Math.random() * messages.length)];}
}

console.log (newMessage);