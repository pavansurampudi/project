const express=require('express');
const router=express.Router();
const employeecntrl=require('../controllers/employee.cntrl');
router.get('/employees',employeecntrl.getemployess);
router.post('/addemployee',employeecntrl.addemployees);
router.post('/employee/login',employeecntrl.employeelogin);
module.exports=router;