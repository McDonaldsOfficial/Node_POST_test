const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    if(req.method==='POST'){
        var body = "";
        var respuesta = 0;
        req.on("data", (d)=> {                        
            data = JSON.parse(d.toString());            
            respuesta = data.n1 + data.n2;                             
            res.end(respuesta.toString());
        });        
    }

    if(req.url==='/')
        fs.readFile(
          path.join(__dirname,'./','index.html'),'utf8',
          (err,content)=>{
              if(err) throw err;
              res.writeHead(200,{'Content-type':'text/html'});              
              res.end(content);                            
          }  
    );
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}` )
});