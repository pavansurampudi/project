const mongoose=require('mongoose');
const recruiterschema=mongoose.Schema({
    companyName:{type:String},
    password:String,
    companyMail:String,
    industryType:String,
    yearsofExp:Number,
    About:String
});

const recruitermodel=mongoose.model('jobgivers',recruiterschema);
module.exports=recruitermodel;