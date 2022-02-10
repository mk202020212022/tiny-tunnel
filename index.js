module.exports = cfg => {
const net = require('net'),
    tg = new (require('stream-throttle').ThrottleGroup)({rate: cfg.rate});
return net.createServer((s) => {
    var d = net.connect({ port: cfg.port, host: cfg.host });
    s.on('error', () => {}).once('close', () => d.end());
    d.on('error', () => {}).once('close', () => s.end());
    s.pipe(d).pipe(tg.throttle()).pipe(s);
}).on('error', (err) => {throw err})
};


