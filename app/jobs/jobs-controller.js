function JobController(){

var jobController = new JobController

function draw() {
    var jobArr = jobService.getJobs()
    var template = ''
    for (let i = 0; i < jobArr.length; i++) {
        const job = jobArr[i];
        template +=`
        <div class ="col-sm-4">
        <p>${job.occupation}</p>
        <p>${job.location}</p>
        <p>${job.pay}</p>
        <p>${job.qualification}</p>
      </div>
      `
    }
    document.getElementById('board').innerHTML = template
}


this.addJob = function addJob(event) {
    event.preventDefault();
    var form = event.target

    var jobObj = {
        occupation: form.occupation.value,
        location: form.location.value,
        pay: form.pay.value,
        qualification: form.qualification.value
        
    }
    jobService.addJob(jobObj)
    document.getElementById('job-form').reset()
    draw()
}

draw()
}