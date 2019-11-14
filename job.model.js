const mongoose=require('mongoose');
const jobschema=mongoose.Schema({
    username:String,
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
    reasonsforleaving:String
});
const jobmodel=mongoose.model('jobbers',jobschema);
module.exports=jobmodel;