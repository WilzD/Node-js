//this file is connected to writing-reading-Routes.js
const http=require('http')
//we are requiring that file here
//this will go in that file and see what us there in module.exports there
// whatever there in that exports we can take it here in this file 
const Routes=require('./writing-reading-Routes.js')

//now the function requestHandler is stored in routes
//and we are saying to node .., hey make a server for what is there in routes
//in this way we can split two files and make our code clean
const server=http.createServer(Routes.handeler) // we are fetching handeler as an key of module object

console.log(Routes.someText)
server.listen(4000)
