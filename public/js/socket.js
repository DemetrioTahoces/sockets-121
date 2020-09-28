const socket = io();

socket.on('connect', () => {
    console.log('connected to server');
});

socket.on('disconnect', () => {
    console.log('Connection lost with server');
});

socket.emit('SendMessage', {
    user: 'Deme',
    message: 'Hello World'
}, (message) => {
    console.log(message);
});

socket.on('SendMessage', (message) => {

    console.log(message);
});