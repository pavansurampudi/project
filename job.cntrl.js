const jobsvc = require('../services/job.svc');

const jobcntrl = {
    addemplyee: async function (req, res) {
        try {
            // const employee = await jobsvc.registerEmployee(req.body.mobile,req.body.mail);
            // if (employee) {
            //     res.send("You are an active searching person");
            //     res.status(200);
            // }
            // else {
                await jobsvc.saveemployee(req.body);
                res.send("Your now a seeker").status(200);
            // }
        } catch(error) {
            res.send(error);
            res.status(200);
        }
    }
}
module.exports = jobcntrl;