const getStoredJobApplication = () => {
    const storedJob = localStorage.getItem('job-application')
    if(storedJob){
        return JSON.parse(storedJob)
    }
    return []
}

const saveJobApplication = id => {
   const storeJobApplication = getStoredJobApplication();
   const exist = storeJobApplication.find(jobId => jobId === id)

   if(!exist){
    storeJobApplication.push(id)
    localStorage.setItem('job-application', JSON.stringify(storeJobApplication))
   }
}

export {saveJobApplication, getStoredJobApplication}