const router=require('express').Router();
const songrouter=require('./routes');
router.use( '/api',songrouter)
module.exports=router