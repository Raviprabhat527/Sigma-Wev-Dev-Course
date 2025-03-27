let http=require("http")

let server=http.createServer((req,res)=>{

    if(req.url=="/news"){ //http://localhost:7500/news
        let obj={
            status:1,
            data:[
                {
                    newsTitle:'ws',
                    newDes:"WS Hello"
                },
                {
                    newsTitle:'IIP',
                    newDes:"IIP Hello"
                }
            ]
        }
        res.end(JSON.stringify(obj))

    }

    if(req.url=="/about"){ //http://localhost:7500/about

    }

    if(req.url=="/"){ //http://localhost:7500
        res.end("Welcome to ws")
    }

})
server.listen("7500") //http://localhost:7500