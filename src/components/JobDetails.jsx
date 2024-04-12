import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AdditionalBanner from "./AdditionalBanner";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localstorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id)

  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  const handleApplyJob = () => {
    saveJobApplication(idInt)
     toast('You have applied successfully')
  }
  return (
    <div>
      <AdditionalBanner title="Job Details"></AdditionalBanner>
      <div className="my-container py-10 ">
        <div className="w-full grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3  flex flex-col space-y-6 px-3 py-4">
            <p>
              <span className="font-bold">Job Description</span> :{" "}
              {job.job_description}{" "}
            </p>
            <p>
              <span className="font-bold">Job Responsibility</span> :{" "}
              {job.job_responsibility}
            </p>
            <p className="font-bold">Educational Requirements :</p>
            <p>{job.educational_requirements}</p>
            <p className="font-bold">Experience</p>
            <p>{job.experiences}</p>
          </div>
          <div className="border border-blue-300 rounded-lg divide-y divide-blue-500 flex flex-col px-3 space-y-5 py-4">
            <div className="">
              <p className="font-bold ">Job Details</p>
            </div>
            <div className="">
              <p className="mt-10 leading-tight tracking-wider">
                <span className="font-bold">$Salary : </span>
                {job.salary}
              </p>
              <p>
                <span className="font-bold">Job Title : </span>
                {job.job_title}
              </p>
              <p className="font-bold mt-6">Conatact Information :</p>
            </div>
            <div >
              <p className="mt-6">
                <span className="font-bold">Phone : </span>
                {job.contact_information.phone}
              </p>
              <p>
                <span className="font-bold">Email : </span>
                {job.contact_information.email}
              </p>
              <p>
                <span className="font-bold">Addres : </span>
                {job.contact_information.address}
              </p>
            </div>
            <button onClick={()=>handleApplyJob(id)} className="py-2 w-full block bg-blue-400 hover:bg-blue-500 transition duration-200 text-white rounded-lg font-bold">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
