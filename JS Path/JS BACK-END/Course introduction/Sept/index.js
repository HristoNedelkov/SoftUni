const config = require('./config.json');
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
    
const VIEWS_PATH = path.resolve(config.viewsDir)
const STATIC_FILES_PATH = path.resolve(config.staticFilesDir)

const RouteFilePath = {
    '/': '/home/index.html',
    '/addBreed': '/addBreed.html',
    '/addCat' : '/addCat.html',
    '/sac':'',
}
const mimeTypeMap = {
    '.html': "text/html",
    '.css': "text/css",      
    '.js': 'application/javascript',
    '.json': 'application/json'
}
function sendFile(res, fullFilePath) {


   const fileExt = path.extname(fullFilePath)   
    const type = mimeTypeMap[fileExt]
    fs.readFile(fullFilePath, function (e, data) {
        if (e) { 
            const { message } = e

            res.writeHead(500, {
                'Content-Lenght': Buffer.byteLength(message),
                'Content-Type': 'text/plain'
            }).end(message)
            return
        }
        res.writeHead(200, {
            'Content-Lenght': Buffer.byteLength(data),
            'Content-Type': type || 'text/plain'
        }).end(data);
    })
}
     
function httpHandler(req, res) {
    const pathname = url.parse(req.url).pathname;

    if (pathname.includes(`/${config.staticFilesDir}/`)) {
            const fullStaticPath = path.resolve(pathname.slice(1))
            sendFile(res, fullStaticPath)
            return
    }

    const fileRelativePath = RouteFilePath[pathname]
    if (!fileRelativePath) {
        const data = 'NOT FOUND!'

        res.writeHead(404, {
            'Content-Lenght': Buffer.byteLength(data),
            'Content-Type': 'text/html'
        }).end(data)
        return;
    }
    const fullFilePath = path.join(VIEWS_PATH, fileRelativePath)
    sendFile(res, fullFilePath)
}


http.createServer(httpHandler).listen(config.port, function () {
    console.log('Server is listening... port: ' + config.port );
}) 