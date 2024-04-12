import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4)
  useState(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="my-container py-20">
      <SectionTitle
        title="Featured Jobs"
        pera="Explore thousands of job opportunities with all the information you need. Its your future"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 py-5">
        {
            jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className={dataLength === jobs.length ? 'hidden' : 'flex justify-center mt-6'}>
        <button onClick={()=> setDataLength(jobs.length)} className="bg-cyan-400 py-2 px-4 rounded-lg font-semibold " title="show">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
