const net = require('net');
const server = net.createServer(socket => {
    socket.on('data', data => {
        console.log('data',data.toString())
        socket.write('repeating from server ' + data)
    })
    socket.on('end', () => {
        console.log('end',)
    })

    server.getConnections((err, connect) => {
        if (err) {
            console.log('getConnections err',err)
        }
        console.log('connect',connect)
    })

});
server.listen(3000)

