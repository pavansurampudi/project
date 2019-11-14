const express=require('express');
const router=express.Router();
const jobcntrl=require('../controllers/job.cntrl');
router.post('/addemployee',jobcntrl.addemplyee);
module.exports=router;