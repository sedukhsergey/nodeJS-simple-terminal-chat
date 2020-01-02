const net = require('net');
const client = new net.Socket();
client.setEncoding('utf8');
client.connect({
    port: 3000,
    host: 'localhost',
}, () => {
    console.log('connected to server',)
});

process.stdin.on('data', (data) => {
    client.write(data);
})

client.on('data', (data) => {
    console.log('client data',data)
})

client.on('close', () => {
    console.log('connection closed')
})



