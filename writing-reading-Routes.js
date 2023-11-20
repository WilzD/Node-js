const fs=require('fs')
const requestHandler=(req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
          fs.readFile('message.txt','utf8',function(err,data){
          res.write('<html>')
          res.write('<head><title>Write a Good message</title></head>')
          res.write(`<body><div>${data}</div><form action="/message" method="POST">Write a Message<input type="text" name="message"><button type="submit">Send</button></form></body>`)
          res.write('</html>')
          return res.end()
        });
    }
    if(url==='/message' && method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
          // console.log(chunk)
          body.push(chunk)
        })
        return req.on('end',()=>{
          const parsedBody=Buffer.concat(body).toString()
          const message=parsedBody.split('=')[1]
          fs.writeFile('message.txt',message, err=>{
            res.statusCode=302
            res.setHeader('Location','/')
            return res.end()
          })
        })
    }
}
// exporting this function to the other file named writing-reading-file.js
// module.exports=requestHandler

//we can also export multiple files
// 1st way by making an object
// module.exports={
//     handeler:requestHandler,
//     someText:'some hard code text'
// }
//now in file which is reciving this export can use variable.handeler or variable.sometext to exectute this in that file

//2nd way 
// module.exports.handeler=requestHandler;
// module.exports.someText='some hard code text'

// 3rd way (shortcut) we can ommit module
exports.handeler=requestHandler;
exports.someText='some hard code text'

