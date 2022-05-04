
const {response,request}=require('express')
const usuarioget=(req=request, res=response)=> {
    const {q,apikey,nombre,page,limit=10}=req.query;
    res.json({
        msg:'get API-controlador',
        q,
        apikey,
        nombre,
        page,
        limit
    });
  }
  module.exports={
      usuarioget
  }