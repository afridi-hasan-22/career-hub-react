import React from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";

const Job = ({ job }) => {
  const {id, logo, job_title, company_name,  remote_or_onsite, location, job_type, salary} = job;
  return (
    <div className="">
      <div className="card w-full bg-base-100 shadow">
        <figure>
          <img
            src={logo}
            alt="Shoes"
            className="w-[116px] h-[39px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {job_title}
          </h2>
          <p>{company_name}</p>

          <div className="card-actions justify-start font-extrabold">
            <div className="badge text-blue-500">{remote_or_onsite}</div>
            <div className="badge text-blue-500">{job_type}</div>
          </div>
          <div className="flex justify-between items-center space-x-6">
            <div className="flex items-center space-x-1">
                <ImLocation></ImLocation>
                <p>{location}</p>
            </div>
            <p>$Salary : {salary}</p>
          </div>
          <Link to={`/job/${id}`} ><button className="btn-custom ">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
