const {response}=require('express')
const usuariodelete=(req, res=response)=> {
    res.json({
        msg:'delete API-controlador'
    });
  }
  module.exports={
      usuariodelete
  }