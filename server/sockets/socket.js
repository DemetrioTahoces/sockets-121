const { io } = require('../server');

io.on('connection', (client) => {

    console.log('User connected');

    client.on('disconnect', () => {

        console.log('User disconnected');
    })

    client.on('SendMessage', (message) => {

        console.log(message);

        client.broadcast.emit('SendMessage', message);

        /*
        if (message.user) {
            callback({
                message: 'OK'
            });
        } else {
            callback({
                message: 'KO'
            });
        }
        */
    });

    client.emit('SendMessage', {
        user: 'ADMIN',
        message: 'Welcome to this application'
    });
});