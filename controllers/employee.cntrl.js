const employeesvc=require('../services/emplyee.svc');
const bcrypt=require('bcrypt');
const employeecntrl={
    getemployess:async function(req,res)
    {
        try{
            let allemployess= await employeesvc.getEmployess();
            res.json(allemployess).status(200);
        }catch(error){
            res.send(error).status(200);
        }
        
    },
    addemployees:async function(req,res)
    {
        try{
            let mail=req.body.mail;
            let employeepresent=await employeesvc.employeecheck(mail);
            if(employeepresent){
                res.send("You are already a job seeker").status(200);
            }
            else{
                req.body.password=bcrypt.hashSync(req.body.password,2);
                await employeesvc.addEmployee(req.body);
                res.send("Congratulations your now a job seeker").status(200);
            }
        }catch(error)
        {
            res.send(error).status(200);
        }
    },
    employeelogin:async function(req,res)
    {
        try{
            let employee=await employeesvc.getEmployeelogin(req.body.username);
            let login=bcrypt.compareSync(req.body.password,employee.password);
            if(login)
            {
                res.send("Hey Now U can Search Your Jobs!!").status(200);
            }
            else{
                res.send("Password is hashed try again!!!").status(200);
            }
        }catch(error)
        {
            res.send(error).status(200);
        }
    }
}

module.exports=employeecntrl;