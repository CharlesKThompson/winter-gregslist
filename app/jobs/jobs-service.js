function JobsService() {

    var jobs = []
    var requirements = ['yes', 'no']

    function Job(occupation, location, pay, qualification) {
        this.occupation = occupation
        this.location = localStorage
        this.pay = pay
        this.qualification = qualifications[qualification]
    }

    //Public
    this.getJobs = function getJobs() {
        return JSON.parse(JSON.stringify(jobs))
    }

    this.addJob = function addJob(jobObj) {
        var newJob = new Job(jobObj.occupation, jobObj.location, jobObj.pay, jobObj.qualification)
        jobs.push(newJob)
    }

    this.removeJob = function removeJob(jobOb) {
        var oldCar = ////
            job.remove(newJob)
    }

    console.log("Job Search Portion")
    jobs.push(new Job('director', 'Hollywood', 75000, "GreatPersonality"))
    jobs.push(new Job('robotics programmer', 'Singapore', 400000, 'Doctorate CGI in Halograms'))
    jobs.push(new Job('solar inspector', 'Osaka', 65000, 'IT installation Certificate'))
    jobs.push(new Job('Pizza Connoiseur', 'Amalfi Coast', 55000, 'Best Pizza eater or go home'))



}