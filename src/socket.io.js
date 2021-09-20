module.exports=(io)=>{
    var data=[]
    io.on('connection',(socket)=>{
       for (let i=0;i>data.length;i++){
           io.emit('show_drawing',data[i])
       }
        socket.on('delete',()=>{
            data=[]
            io.emit('show_drawing',null)
        })
        socket.on('drawing',(writ)=>{
            data.push(writ)
            io.emit('show_drawing',writ)
        })

    })
}