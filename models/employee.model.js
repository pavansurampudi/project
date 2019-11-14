const mongoose=require('mongoose');
const employeeschema=mongoose.Schema({
    username: {type: String, unique: true, required: [true, 'username is required']},
    password: {type: String, required: true},
    mail:{type:String,unique:true},
    mobile:{type:Number,unique:true},
    hometown:String,
    interests:[String],
    experience:Number,
    maritalStatus:String,
    nationality:String,
    languages:[String],
    currentLocation:String,
    lastjobexp:Number,
    lastjobDesig:String,
    department:String,
    reasonsforleaving:String,
    loggeddate:{type:Date,default:Date.now()}
});
const employeemodel=mongoose.model('jobseekers',employeeschema);
module.exports=employeemodel;