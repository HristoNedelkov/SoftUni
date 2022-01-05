function httpRequest(request) {
let methods= ['GET', 'POST', 'DELETE','CONNECT'];
let uriReg = /^([A-Za-z0-9.]+)$|\*/g;
let massageReg = /^([^<>\\&'"]*)$/g;
let version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0'];
if(!request.hasOwnProperty('method')||!methods.includes(request.method)){
    throw new Error ('Invalid request header: Invalid Method');
};
if(!request.uri.match(uriReg)) {
    throw new Error ('Invalid request header: Invalid URI');
};
if (!version.includes(request.version)) {
    throw new Error ('Invalid request header: Invalid Version');
};
if (!request.message.match(massageReg)){
    throw new Error ('Invalid request header: Invalid massage');
}
return request;
}
httpRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  } 
  )