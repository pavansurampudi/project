const express=require('express');
const router=express.Router();
const recruitercntrl=require('../controllers/recruiter.cntrl');
router.get('/recruiters',recruitercntrl.getrecruiters);
router.post('/addrecruiter',recruitercntrl.addrecruiters);
router.get('/recruiters/:companyname',recruitercntrl.searchrecruiter);
router.post('/login',recruitercntrl.loginrecruiter);

module.exports=router;