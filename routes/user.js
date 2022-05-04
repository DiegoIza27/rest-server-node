const {Router}=require('express');
const { usuarioput } = require('../controllers/usariop');
const { usuarioget } = require('../controllers/usuario');
const { usuariodelete } = require('../controllers/usuariodelete');
const { usuariopatch } = require('../controllers/usuariopatch');
const { usuariospost } = require('../controllers/usuariopost');
const router= Router();

router.get('/',usuarioget )
  router.put('/:id',usuarioput)
  router.post('/',usuariospost )
  router.delete('/',usuariodelete )
  router.patch('/', usuariopatch)


module.exports=router;
