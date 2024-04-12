import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";
import AdditionalBanner from "./AdditionalBanner";
const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([])
  useEffect(() => {
    const storedJobs = getStoredJobApplication();
    // if(jobs.length > 0){
    //     const jobsApplied = jobs.filter(job => storedJobs.includes(job.id))
    //     console.log(jobs, storedJobs, jobsApplied);
    // }
    const jobsApplied = [];
    for (const id of storedJobs) {
      const job = jobs.find((job) => job.id === id);
      if (job) {
        jobsApplied.push(job);
      }
    }
    setAppliedJobs(jobsApplied);
    setDisplayJobs(jobsApplied)
  }, []);

  const handleJobsFilter = filter => {
    if(filter === 'all'){
        setDisplayJobs(appliedJobs)
    }else if(filter === 'remote'){
       const remoteJobs = appliedJobs.filter(jobs => jobs.remote_or_onsite === 'Remote');
       setDisplayJobs(remoteJobs)
    }else if(filter === 'onsite'){
        const onsiteJobs = appliedJobs.filter(jobs => jobs.remote_or_onsite === 'Onsite')
        setDisplayJobs(onsiteJobs)
    }
  }
  return (
    <div>
      <AdditionalBanner title="Applied Jobs"></AdditionalBanner>
      <div className="my-container py-10">
        <div className="flex justify-end py-9">
          <details className="dropdown">
            <summary className="m-1 btn">Filter</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
              <li onClick={()=> handleJobsFilter('all')}>
                <a>All</a>
              </li>
              <li onClick={()=> handleJobsFilter('remote')}>
                <a>Remote</a>
              </li>
              <li onClick={()=> handleJobsFilter('onsite')}>
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>
        <div>
          <ul className="flex flex-col space-y-5 ">
            {displayJobs.map((job) => (
              <li
                key={job.id}
                className="grid lg:grid-cols-7 gap-3 items-center border border-gray-100 px-6 py-7"
              >
                <div className="col-span-2">
                  <img
                    className="w-[240px] object-cover"
                    src={job.logo}
                    alt=""
                  />
                </div>
                <div className="col-span-4 flex flex-col space-y-4">
                  <p>{job.job_title}</p>
                  <p>{job.company_name}</p>
                  <p>{job.remote_or_onsite}</p>
                  <p>{job.location}</p>
                </div>
                <div className="col-span-1 ">
                  <button className="btn-custom ">View Details</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
