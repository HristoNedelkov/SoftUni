const init = require('./init')
const http = require('http');
const querystring = require('querystring');
const url = require('url');


function requestHandler (req, res) {
    let reqUrl = url.parse(req.url);
    let params = querystring.parse(reqUrl.query);

    let count = init.increse()
    res.write('The COUNT is: ' + count)   
    console.log('Now is: ' + count) 

    if(params.name == 'show') {
        console.log(init.showAll())
        res.end()
        return
    }
    let resul = init.addName(params.name)
    res.write('\n'+ resul)
    res.end()
      
}

http.createServer(requestHandler).listen(3000, () => {
    console.log('Server is listening on port 3000! ...')
})  
    