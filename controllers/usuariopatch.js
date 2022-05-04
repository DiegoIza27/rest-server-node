
const {response}=require('express')
const usuariopatch =(req, res=response)=> {
    res.json({
        msg:'patch API-controlador'
    });
  }
  module.exports={
      usuariopatch
  }