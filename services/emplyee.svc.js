const emplyeemodel=require('../models/employee.model');
class Employee{
    getEmployess(){
        return emplyeemodel.find({}).exec();
    }
    getEmplyoeesById(id){
        return emplyeemodel.findById(id).exec();
    }
    employeecheck(mail){
        return emplyeemodel.findOne({mail:mail}).exec();
    }
    addEmployee(data)
    {
        let employee=new emplyeemodel(data);
        employee.save();
    }
    getEmployeelogin(username)
    {
        return emplyeemodel.findOne({username:username}).exec();
    }
    
}
module.exports=new Employee();