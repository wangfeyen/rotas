const express=require("express");
const app = express();
const porta=3000;
app.get("/rota1",requisicao);
function requisicao(Request,Response){
    Response.send("Hello World");
}
app.listen(porta,()=>{
    console.log("Servidor rodando na porta "+porta)})