const recruitersvc = require('../services/recruiter.svc');
const bcrypt=require('bcrypt');
const recruitercntrl = {
    getrecruiters: async function (req, res)
     {
        try {
            let recruiters = await recruitersvc.getRecruiters();
            res.json(recruiters).status(200);
        } catch (error) {
            res.send(error).status(200);
        }
    },
    addrecruiters: async function (req, res) 
    {
        try {
            let recruiterpresent=await recruitersvc.checkRecruiter(req.body.companyName);
            if(recruiterpresent){
                res.send("Added already").status(200); 
            }else{
                req.body.password=bcrypt.hashSync(req.body.password,2);
                await recruitersvc.addRecruiter(req.body);
                res.send("Added Succesfully").status(200);   
            }
        }catch(error) {
            res.send(error).status(200);
        }
    },
    searchrecruiter: async function (req, res)
     {
        try {
            let companyname = req.params.companyname;
            let searchedcompany = await recruitersvc.searchRecruiter(companyname);
            if (searchedcompany) {
                res.json(searchedcompany).status(200);
            } else {
                res.send("Become a recruiter to see your name").status(200);
            }
        }catch(error) {
            res.send(error).status(200);
        }
    },
    loginrecruiter: async function(req,res)
    {
        try{
            let user=await recruitersvc.loginrecruiters(req.body.companyName);
            let login = bcrypt.compareSync(req.body.password, user.password);
            if(login)
            {
                res.send("Oh Your logged in!!!").status(200);
            }
            else{
                res.send("I think Your are drowsy.try Again With mind!!! ").status(200);
            }

        }catch(error)
        {
            res.send(error).status(200);
        }
    }
}
module.exports = recruitercntrl;