const http=require('http')
const server=http.createServer((request,respond)=>{
    console.log('wilson')
})
server.listen(4000)