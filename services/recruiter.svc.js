const recruitmodel=require('../models/recruiter.model');
class Recruiter{
    getRecruiters()
    {
        return recruitmodel.find({}).exec();
    }
    checkRecruiter(companyname)
    {
        return recruitmodel.findOne({companyName:companyname}).exec();
    }
    addRecruiter(data)
    {
        let recruiter= new recruitmodel(data);
        recruiter.save();
    }
    searchRecruiter(companyname)
    {
        return recruitmodel.findOne({companyName:companyname}).exec();
    }
    loginrecruiters(companyname){
        return recruitmodel.findOne({companyName:companyname}).exec();
    }
}

module.exports=new Recruiter();