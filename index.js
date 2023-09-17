const PORT = config.get('serverPort') || 5000
const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/users') {
        return res.end('USers')

    }
    res.end(req.url)

})

server.listen(PORT, () => console.log('sadsadas'))