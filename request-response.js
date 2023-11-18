const http=require('http')
const server=http.createServer((request,response)=>{
const url=request.url
if(url==='/node'){
    response.write('<html>')
    response.write('<head><title>My first page</title></head>')
    response.write('<body><h1>Welcome to my nodeJS Project</h1>')
    response.write('<form action="/home" method="POST"><button type="submit">Home</button></form>')
    response.write('<form action="/about" method="POST"><button type="submit">About</button></form>')
    response.write('</body>') 
    response.write('</html>') 
    return response.end()
}
if(url==='/home'){
    response.write('<html>')
    response.write('<head><title>Home Page</title></head>')
    response.write('<body><h1>Welcome to Home Page</h1>')
    response.write('</body>') 
    response.write('</html>') 
    return response.end() 
}
if(url==='/about'){
    response.write('<html>')
    response.write('<head><title>About Page</title></head>')
    response.write('<body><h1>Welcome to About Pge</h1>')
    response.write('</body>') 
    response.write('</html>') 
    return response.end() 
}

})
server.listen(3000)
