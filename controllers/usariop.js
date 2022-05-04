

const {response}=require('express')
const usuarioput =(req, res=response)=> {
    const {id}=req.params;
    res.json({
        msg:'put API-controlador',
        id
    });
  }
  module.exports={
      usuarioput
  }