Limit bandwidth through tunnel. For example, reduce the downloading speed of your mobile browser.

# tiny-tunnel
## npm
``` bash
npm install tiny-tunnel
```
## Example
``` js
const tunnel = require("tiny-tunnel");
tunnel({port: 1041, host: "51.25.53.193", rate: 20*1024}).listen(8081);
```
## Parameters

Configuration object properties:

- _port_ The port of the next server
- _host_ The ip address of the next server
- _rate_ The upper limit of bytes per second of the connection

## For example

Reduce data in time of your mobile. Install node.js in your phone, for instance [NodeJS Frontend](https://github.com/warren-bank/Android-NodeJS-Frontend). Install package ([see](https://stackoverflow.com/a/71144601/13659942)). Find a socks proxy address and run it. Set firefox to use socks proxy.



