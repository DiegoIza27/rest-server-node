const {response}=require('express')
const usuariospost=(req, res=response)=> {
    const {edad,nombre,id}=req.body;
    res.json({
        msg:'post API-controlador',
        nombre,edad,id
    });
  }
  module.exports={
      usuariospost
  }