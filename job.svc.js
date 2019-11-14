const jobmodel=require('../models/job.model');
class employeeMethods{
    registerEmployee(mobile,email)
    {
        return jobmodel.findOne({mobile:mobile,mail:email}).exec();
    }
    saveemployee(data)
    {
        let employee=new jobmodel(data);
        employee.save();
    }
}
module.exports=new employeeMethods();